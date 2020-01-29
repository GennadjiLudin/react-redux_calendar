import React from 'react';

import './WeekDays.scss';

import WeekDay from './WeekDay/WeekDay';

const weekDaysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const WeekDays = () => {
    return (
        <div className="week-days">
            {weekDaysName.map((weekDayName, index) => (
                <WeekDay variables={index >= 5 ? "weekend" : null} key={index} weekDayName={weekDayName} />
            ))}
        </div>
    )
}

export default WeekDays;