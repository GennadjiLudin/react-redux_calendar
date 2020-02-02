import React from 'react';

import './DayTodo.scss';

const DayTodo = ({title, variables, onClickDateHandler}) => {
    return (
        <div className={`day-todo ${variables}`} onClick={e => onClickDateHandler(e)}>{title}</div>
    )
}

export default DayTodo;