import React from 'react';

import './WeekDay.scss';

const WeekDay = ({ weekDayName }) => {
    return (
        <div className="week-day">{weekDayName}</div>
    )
}

export default WeekDay;