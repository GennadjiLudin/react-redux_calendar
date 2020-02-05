import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import TodoList from '../../components/TodoList/TodoList';
import FilterBlok from '../../components/FilterBlok/FilterBlok';
import { addTaskAction, removeTaskAction, completeTaskAction, changeFilterAction, sortTasksAction } from '../../actions/actionCreator';

import './Todos.scss';


const Todos = (props) => {
    const { selectedDay, addTask, removeTask, completeTask, changeFilter, sortTasks, filters } = props;

    // const addTask = ({key}) => {
    //     const {taskText} = this.state;

    //     if(taskText.trim() !== '' && key === 'Enter') {
    //         const { addTask } = this.props;

    //         addTask((new Date()).getTime(), taskText, false);

    //         this.setState({
    //             taskText: '',
    //         });
    //     }
    // }

    const filterTasks = (tasks, activeFilter) => {
        switch (activeFilter) {
            case 'completed':
                return tasks.filter(task => task.isCompleted);
            case 'active':
                return tasks.filter(task => !task.isCompleted);
            default:
                return tasks;
        }
    }

    const getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;
    const getCompletedCounter = tasks => tasks.filter(task => task.isCompleted).length;

    // const onDragEnd = ({destination, source, draggableId}) => {

    //     if(!destination) {
    //         return;
    //     }
        
    //     sortTasks(
    //         source.index,
    //         destination.index,
    //         draggableId
    //     );
    // }

    const filteredTasks = filterTasks(selectedDay.tasks, filters);
    const activeCounter = getActiveTasksCounter(selectedDay.tasks);
    const completedCounter = getCompletedCounter(selectedDay.tasks);
    
    return (
        <DragDropContext /*onDragEnd={onDragEnd}*/>
            <div className="todos">
                {selectedDay && (
                    selectedDay.tasks.length === 0 ? (
                        <>
                            <span>В настояще время нет активных задач!</span>
                            <button>Добавить задачу</button>
                        </>
                    ) : (
                        <>
                            <TodoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask} activeFilter={filters} />
                            <FilterBlok changeFilter={changeFilter} activeCounter={activeCounter} completedCounter={completedCounter} tasks={selectedDay.tasks} activeFilter={filters} />
                        </>
                    )
                )}
            </div>
        </DragDropContext>
    )
}

const mapStateToProps = state => {
    const { selectedDay } = state.tasks;
    const { filters } = state.filters;
    return {
        selectedDay,
        filters,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTask: (id, text, isCompleted) => dispatch(addTaskAction(id, text, isCompleted)),
        removeTask: id => dispatch(removeTaskAction(id)),
        completeTask: id => dispatch(completeTaskAction(id)),
        changeFilter: activeFilter => dispatch(changeFilterAction(activeFilter)),
        sortTasks: (droppableIndexStart, droppableIndexEnd, draggableId) => dispatch(sortTasksAction(droppableIndexStart, droppableIndexEnd, draggableId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
