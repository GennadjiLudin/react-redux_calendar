import React from 'react';
import { connect } from 'react-redux';

import { setNumWithZero } from '../../helpers/helpers';
import { selectDayAction } from '../../actions/actionCreator';
import { changeMonth, changeYear } from '../../actions/actionHeader';
import Day from '../Day/Day';

import './Dates.scss';

const Dates = (props) => {
    const { datesArr, arrPrev, arrNext, month, year, selectDay, allDays, selectedDay, changeMonth, changeYear } = props;

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

    const onClickDateHandlerCurrent = (id, date, month, year) => {
        selectDay(id, date, setNumWithZero(month + 1), year);
    }

    const onClickDateHandlerPrev = (id, date, month, year) => {
        selectDay(id, date, month === 0 ? 12 : setNumWithZero(month), year);
        changeMonth("");
        if(month === 0) changeYear("");
    }

    const onClickDateHandlerNext = (id, date, month, year) => {
        selectDay(id, date, month === 11 ? setNumWithZero(1) : setNumWithZero(month + 2), year);
        changeMonth("next");
        if(month === 11) changeYear("next");
    }

    return (
        <div className="dates">
            {arrPrev.map(date => (
                <Day
                    key={getDateId(date, 'prev')}
                    date={date}
                    month={month}
                    year={year}
                    id={getDateId(date, 'prev')}
                    onClickDateHandler={onClickDateHandlerPrev}
                    rightClassName={rightClassName(date, 'prev')}
                    allDays={allDays}
                    selectedDay={selectedDay}
                />
            ))}
            {datesArr.map(date  => (
                <Day 
                    key={getDateId(date, '')}
                    date={date}
                    month={month}
                    year={year}
                    id={getDateId(date, '')}
                    onClickDateHandler={onClickDateHandlerCurrent}
                    rightClassName={rightClassName(date, '')}
                    allDays={allDays}
                    selectedDay={selectedDay}
                />
            ))}
            {arrNext.map(date => (
                <Day
                    key={getDateId(date, 'next')}
                    date={date}
                    month={month}
                    year={year}
                    id={getDateId(date, 'next')}
                    onClickDateHandler={onClickDateHandlerNext}
                    rightClassName={rightClassName(date, 'next')}
                    allDays={allDays}
                    selectedDay={selectedDay}
                />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    const { month, year } = state.date;
    const { allDays, selectedDay } = state.tasks;
    return {
        month,
        year,
        allDays,
        selectedDay,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      selectDay: (id, day, month, year) => dispatch(selectDayAction(id, day, month, year)),
      changeMonth: type => dispatch(changeMonth(type)),
      changeYear: type => dispatch(changeYear(type)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dates);