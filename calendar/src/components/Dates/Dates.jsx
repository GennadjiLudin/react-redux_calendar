import React from 'react';
import { connect } from 'react-redux';

import { setNumWithZero } from '../../helpers/helpers';
import { selectDayAction } from '../../actions/actionCreator';

import './Dates.scss';

const Dates = (props) => {
    const { datesArr, arrPrev, arrNext, month, year, selectDay, allDays } = props;

    const onClickDateHandler = e => {
        selectDay(e.target.id);
    }

    const isCurrentDay = (day) => {
        let date = new Date();
        let currentDate = date.getDate();
        let currentYear = date.getFullYear();
        let currentMonth = date.getMonth();

        return currentYear === year && currentMonth === month && currentDate === day;
    }

    const getDateId = (date) => {
        return `${year}${setNumWithZero(month)}${setNumWithZero(date)}`;
    }
    
    console.log(allDays);
    return (
        <div className="dates">
            {arrPrev.map(date => (
                <div 
                    className="date" 
                    key={`${month === 0 ? year - 1 : year}${month === 0 ? 11 : setNumWithZero(month - 1)}${setNumWithZero(date)}`}
                    id  ={`${month === 0 ? year - 1 : year}${month === 0 ? 11 : setNumWithZero(month - 1)}${setNumWithZero(date)}`}
                >
                    <span className="date-num date-num-prev">{date}</span>
                    <div className="date-wrap__info">
                        {/* {someTodoArray.map()} */}
                    </div>
                </div>
            ))}
            {datesArr.map(date  => (
                <div 
                    className="date"
                    key={getDateId(date)}
                    id={getDateId(date)}
                    onClick={e => onClickDateHandler(e)}
                >
                    <span className={isCurrentDay(date) ? "date-num date-num-current" : "date-num"}>{date}</span>
                    <div className="date-wrap__info">
                        {allDays[getDateId(date)] && allDays[getDateId(date)].tasks.map((task, i) => (
                            i < 5 && <div>{task.title}</div>
                        ))}
                    </div>
                </div>
            ))}
            {arrNext.map(date => (
                <div 
                    className="date" 
                    key={`${month === 11 ? year + 1 : year}${month === 11 ? setNumWithZero(0) : setNumWithZero(month + 1)}${setNumWithZero(date)}`}
                    id  ={`${month === 11 ? year + 1 : year}${month === 11 ? setNumWithZero(0) : setNumWithZero(month + 1)}${setNumWithZero(date)}`}
                >
                    <span className="date-num date-num-next">{date}</span>
                    <div className="date-wrap__info">
                        {/* {someTodoArray.map()} */}
                    </div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    const { month, year } = state.date;
    const { allDays } = state.tasks;
    return {
        month,
        year,
        allDays,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      selectDay: id => dispatch(selectDayAction(id)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dates);