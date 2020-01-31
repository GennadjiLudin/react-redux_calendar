import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setNumWithZero } from '../../helpers/helpers';
import { selectDayAction } from '../../actions/actionCreator';

import './Dates.scss';

const Dates = (props) => {
    const { datesArr, arrPrev, arrNext, month, year, selectDay } = props;

    const onClickDateHandler = e => {
        selectDay(e.target.id);
    }

    return (
        <div className="dates">
            {arrPrev.map(date => (
                <div 
                    className="date" 
                    key={`${year}${setNumWithZero(month-1)}${setNumWithZero(date)}`}
                    id  ={`${year}${setNumWithZero(month-1)}${setNumWithZero(date)}`}
                >
                    <span className="date-num date-num-prev">{setNumWithZero(date)}</span>
                    <div className="date-wrap__info">
                        {/* {someTodoArray.map()} */}
                    </div>
                </div>
            ))}
            {datesArr.map( date  => (
                <div 
                    className="date" 
                    key={`${year}${setNumWithZero(month)}${setNumWithZero(date)}`}
                    id={`${year}${setNumWithZero(month)}${setNumWithZero(date)}`}
                    onClick={e => onClickDateHandler(e)}
                >
                    <span className="date-num">{setNumWithZero(date)}</span>
                    <div className="date-wrap__info">
                        {/* {someTodoArray.map()} */}
                    </div>
                </div>
            ))}
            {arrNext.map(date => (
                <div 
                    className="date" 
                    key={`${year}${setNumWithZero(month+1)}${setNumWithZero(date)}`}
                    id  ={`${year}${setNumWithZero(month+1)}${setNumWithZero(date)}`}
                >
                    <span className="date-num date-num-next">{setNumWithZero(date)}</span>
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
    return {
        month,
        year,
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