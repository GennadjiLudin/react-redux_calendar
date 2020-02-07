import React from 'react';

import './FilterTodo.scss';

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

const FilterTodo = (props) => {
    const {tasks, activeCounter, completedCounter, activeFilter, changeFilter} = props;
    return (
        <div className="filter-todo">
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

FilterTodo.defaultProps = {
    amount: 0,
    text: 'Add todo',
    changeFilter: () => {},
}

export default FilterTodo;