import React from 'react';

import './DayTodo.scss';

const DayTodo = ({title, variables}) => {
    return (
        <div className={`day-todo ${variables}`}>{title}</div>
    )
}

export default DayTodo;