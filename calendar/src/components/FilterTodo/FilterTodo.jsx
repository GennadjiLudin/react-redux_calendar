import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';

import { changeFilterAction } from '../../actions/actionCreator';

import './FilterTodo.scss';

const FILTERS_BTN = [
    {
        text: 'Все',
        id: 'all',
    },
    {
        text: 'Активные',
        id: 'active',
    },
    {
        text: 'Завершенные',
        id: 'completed',
    },
];

const FilterTodo = (props) => {
    const {selectedDay, filters, changeFilter} = props;

    const [activeCounter, setActiveCounter] = useState(0);
    const [completedCounter, setCompletedCounter] = useState(0);

    useEffect(() => {
        const getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;
        const getCompletedCounter = tasks => tasks.filter(task => task.isCompleted).length;
    
        setActiveCounter(getActiveTasksCounter(selectedDay.tasks));
        setCompletedCounter(getCompletedCounter(selectedDay.tasks));
    }, [selectedDay.tasks])

    const checkCounter = (counter, text) => {
        if (counter === 1) {
            return `${counter} ${text}ая задача`;
        } else if (counter >= 2 && counter <= 4) {
            return `${counter} ${text}ыe задачи`;
        } else {
            return `${counter} ${text}ых задач`;
        }
    }

    const checkAllCounter = (counter) => {
        if (counter === 1) {
            return `${counter} задача`;
        } else if (counter >= 2 && counter <= 4) {
            return `${counter} задачи`;
        } else {
            return `${counter} задач`;
        }
    }

    return (
        <div className="filter-todo">
            <span className="amount">
                {filters === "completed" ? checkCounter(completedCounter, "завершенн") : filters === "active" ? checkCounter(activeCounter, "активн") : `Всего ${checkAllCounter(selectedDay.tasks.length)}`} 
            </span>
            <div className="btn-group">
                {FILTERS_BTN.map(({text, id}) => (
                    <button 
                        onClick={() => changeFilter(id)}
                        key={id}
                        className={id === filters ? "filter-btn active" : "filter-btn"}
                    >
                        {text}
                    </button>
                ))}
            </div>
        </div>
    )
}

FilterTodo.defaultProps = {
    amount: 0,
    text: 'Add todo',
    changeFilter: () => {},
}

const mapStateToProps = state => {
    const { selectedDay } = state.tasks;
    const { filters } = state;
    return {
        selectedDay,
        filters,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeFilter: activeFilter => dispatch(changeFilterAction(activeFilter)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo);