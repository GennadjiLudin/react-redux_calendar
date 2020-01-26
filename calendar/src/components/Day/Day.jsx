import React from 'react'

import './Day.scss'

const Day = ({ dayNum }) => {
    return (
        <div className="day">
            <span className="day__num">{dayNum}</span>
            <div className="day__todo-wrap">
                {/* {someTodoArray.map()} */}
            </div>
        </div>
    )
}

export default Day;