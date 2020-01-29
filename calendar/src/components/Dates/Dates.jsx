import React from 'react';
import { connect } from 'react-redux';

import { setNumWithZero } from '../../helpers/helpers';

import './Dates.scss';

const Dates = (props) => {
    const { datesArr, arrPrev, arrNext, month, year } = props;
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

export default connect(
    mapStateToProps,
    null
)(Dates);