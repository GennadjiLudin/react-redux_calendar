import React, {useEffect} from 'react';

import DayTodo from '../DayTodo/DayTodo';
import { setNumWithZero } from '../../helpers/helpers';

import './Day.scss';

const Day = (props) => {
    const { date, id, onClickDateHandler, rightClassName, allDays, selectedDay, month, year } = props;

    useEffect(() => {
        if(rightClassName === 'date-num date-num-current') {
            onClickDateHandler(id, setNumWithZero(date), month, year);
        }
    }, [])


    return (
        <div 
            className={selectedDay !== null && selectedDay.id === id ? "date date-selected" : "date"}
            id={id}
            onClick={() => onClickDateHandler(id, setNumWithZero(date), month, year)}
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