import React from 'react';
import { connect } from 'react-redux';

import { setNumWithZero } from '../../helpers/helpers';
import { selectDayAction } from '../../actions/actionCreator';
import Day from '../Day/Day';

import './Dates.scss';

const Dates = (props) => {
    const { datesArr, arrPrev, arrNext, month, year, selectDay, allDays } = props;

    const onClickDateHandler = id => {
        selectDay(id);
    }

    const isCurrentDay = (day) => {
        let date = new Date();
        let currentDate = date.getDate();
        let currentYear = date.getFullYear();
        let currentMonth = date.getMonth();

        return currentYear === year && currentMonth === month && currentDate === day;
    }

    const rightClassName = (date, type) => {
        switch (type) {
            case 'prev':
                return "date-num date-num-prev";
            case 'next':
                return "date-num date-num-next";
            default:
                return isCurrentDay(date) ? "date-num date-num-current" : "date-num";
        }
    }

    const getDateId = (date, type) => {
        switch (type) {
            case 'prev':
               return `${month === 0 ? year - 1 : year}${month === 0 ? 11 : setNumWithZero(month - 1)}${setNumWithZero(date)}`;
            case 'next':
                return `${month === 11 ? year + 1 : year}${month === 11 ? setNumWithZero(0) : setNumWithZero(month + 1)}${setNumWithZero(date)}`;
            default:
                return `${year}${setNumWithZero(month)}${setNumWithZero(date)}`;
        }
    }
    
    return (
        <div className="dates">
            {arrPrev.map(date => (
                <Day
                    key={getDateId(date, 'prev')}
                    date={date}
                    id={getDateId(date, 'prev')}
                    onClickDateHandler={onClickDateHandler}
                    rightClassName={rightClassName(date, 'prev')}
                    allDays={allDays}
                />
            ))}
            {datesArr.map(date  => (
                <Day 
                    key={getDateId(date, '')}
                    date={date}
                    id={getDateId(date, '')}
                    onClickDateHandler={onClickDateHandler}
                    rightClassName={rightClassName(date, '')}
                    allDays={allDays}
                />
            ))}
            {arrNext.map(date => (
                <Day
                    key={getDateId(date, 'next')}
                    date={date}
                    id={getDateId(date, 'next')}
                    onClickDateHandler={onClickDateHandler}
                    rightClassName={rightClassName(date, 'next')}
                    allDays={allDays}
                />
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