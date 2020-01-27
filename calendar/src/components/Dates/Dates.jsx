import React from 'react'

import './Dates.scss'

const Dates = ({ date }) => {
    return (
        <div className="date">
            <span className="date">{date}</span>
            <div className="date-wrap">
                {/* {someTodoArray.map()} */}
            </div>
        </div>
    )
}

export default Dates;