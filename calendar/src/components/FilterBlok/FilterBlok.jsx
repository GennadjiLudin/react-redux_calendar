import React from 'react';

import './FilterBlok.scss';

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed',
    },
];

const FilterBlok = (props) => {
    const {tasks, activeCounter, completedCounter, activeFilter, changeFilter} = props;
    return (
        <div className="filter-blok">
            <div className="btn-group">
                {FILTERS_BTN.map(({text, id}) => (
                    <button 
                        onClick={() => changeFilter(id)}
                        key={id}
                        className={id === activeFilter ? "filter-btn active" : "filter-btn"}
                    >{text}</button>
                ))}
            </div>
            <span className="amount"> {activeFilter === "completed" ? `${completedCounter} completed tasks` : activeFilter === "active" ? `${activeCounter} active tasks` : `${tasks.length} tasks`} </span>
        </div>
    )
}

FilterBlok.defaultProps = {
    amount: 0,
    text: 'Add todo',
    changeFilter: () => {},
}

export default FilterBlok;