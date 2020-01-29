import React from 'react';

import './WeekDay.scss';

const WeekDay = ({ weekDayName, variables = "" }) => {
    return (
        <div className={`week-day ${variables}`}>{weekDayName}</div>
    )
}

export default WeekDay;