import React, {useEffect} from 'react';

import DayTodo from '../DayTodo/DayTodo';

import './Day.scss';

const Day = (props) => {
    const { date, id, onClickDateHandler, rightClassName, allDays } = props;

    useEffect(() => {
        if(rightClassName === 'date-num date-num-current') {
            onClickDateHandler(id);
        }
    }, [])

    return (
        <div 
            className="date"
            id={id}
            onClick={() => onClickDateHandler(id)}
        >
            <span className={rightClassName}>{date}</span>
            <div className="date-wrap__tasks">
                {allDays[id] && allDays[id].tasks.map((task, i) => (
                    i < 5 && <DayTodo key={i} title={task.title} onClickDateHandler={onClickDateHandler} variables={task.variables} />
                ))}
            </div>
        </div>
    )
}

export default Day;