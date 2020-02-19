import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { 
    getLastElemsNum, 
    getFirstElemsNum, 
    getLastDateOfMonth,
    addLastElemsNum,
    addFirstElemsNum,
    getLastDateOfPrevMonth,
    range
} from '../../helpers/helpers';

import WeekDays from '../../components/WeekDays/WeekDays';
import Dates from '../../components/Dates/Dates';
import { getAllDaysAction } from '../../actions/actionCreator';

import './Calendar.scss';

const maxDays = 42;

function Calendar(props) {
    const { month, year, getAllDays } = props;
    const [datesArr, setDatesArr] = useState([]);
    const [arrPrev, setArrPrev] = useState([]);
    const [arrNext, setArrNext] = useState([]);

    useEffect(() => {
        let from = 1;
        let to = getLastDateOfMonth(year, month);
        let firstElemsNum = getFirstElemsNum(year, month);
        let lastElemsNum = getLastElemsNum(year, month);
        let LastDateOfPrevMonth = getLastDateOfPrevMonth(year, month);
        let dates = range([], from, to);
        let nexts = addLastElemsNum(lastElemsNum, from, []);
        let prevs = addFirstElemsNum(firstElemsNum, LastDateOfPrevMonth, []);
    
        setDatesArr(dates);
        setArrPrev(prevs);
        setArrNext(nexts);
        
        let finalArr = prevs.concat(dates, nexts);
        let differenceArr = finalArr.length - maxDays;
    
        if(differenceArr !== 0) {
            let newArrNext = [...nexts];
            newArrNext.splice(newArrNext.length - differenceArr);
            setArrNext(newArrNext);
        }
    }, [month, year])

    useEffect(() => {
        getAllDays();
    }, [])

    return (
        <div className="calendar">
            <WeekDays />
            <Dates datesArr={datesArr} arrPrev={arrPrev} arrNext={arrNext} />
        </div>
    )
}

const mapStateToProps = state => {
    const { month, year } = state.date;
    return {
        month,
        year,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDays: () => dispatch(getAllDaysAction()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Calendar);