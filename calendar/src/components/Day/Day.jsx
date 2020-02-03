import React from 'react';

import DayTodo from '../DayTodo/DayTodo';

import './Day.scss';

const Day = ({ date, getDateId, onClickDateHandler, rightClassName, allDays }) => {
    return (
        <div 
            className="date"
            id={getDateId}
            onClick={e => onClickDateHandler(e)}
        >
            <span className={rightClassName}>{date}</span>
            <div className="date-wrap__info">
                {allDays[getDateId] && allDays[getDateId].tasks.map((task, i) => (
                    i < 5 && <DayTodo key={i} title={task.title} onClickDateHandler={onClickDateHandler} variables={task.variables} />
                ))}
            </div>
        </div>
    )
}

export default Day;