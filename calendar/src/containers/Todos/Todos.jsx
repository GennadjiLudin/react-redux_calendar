import React from 'react';
import { connect } from 'react-redux'

import './Todos.scss';

const Todos = (props) => {
    const { selectedDay } = props;
    return (
        <div className="todos">
            {selectedDay && (
                selectedDay.tasks.length === 0 ? (
                    <>
                        <span>В настояще время нет активных задач!</span>
                        <button>Добавить задачу</button>
                    </>
                ) : (
                    selectedDay.tasks.map(task => (
                        <div>{task.title}</div>
                    ))
                )
            )}

        </div>
    )
}

const mapStateToProps = state => {
    const { selectedDay } = state.tasks;
    return {
        selectedDay,
    };
};

export default connect(mapStateToProps, null)(Todos);