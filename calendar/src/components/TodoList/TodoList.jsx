import React, {useState, useEffect} from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { Droppable } from "react-beautiful-dnd";
import { connect } from 'react-redux';
import uuid from 'react-uuid';

import Todo from '../Todo/Todo';
import { removeTaskAction, completeTaskAction, selectTaskAction } from '../../actions/actionCreator';

import './TodoList.scss';

const TodoList = (props) => {
    const {removeTask, completeTask, selectedDay, filters, selectedTask} = props;

    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
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
    
        setFilteredTasks(filterTasks(selectedDay.tasks, filters));
        
    }, [filters, selectedDay.tasks]);

    return (
        // <Droppable droppableId={String(uuid())}>
        //     {provided => (
                <div className={selectedDay.tasks.length >= 8 ? "todo-list-wrap todo-list-wrap-scroll" : "todo-list-wrap"}>
                    <ul /*{...provided.droppableProps} ref={provided.innerRef}*/ className="todo-list">
                        {/* <TransitionGroup> */}
                            {filteredTasks.map((taskList) => (
                                // <CSSTransition
                                //     key={uuid()}
                                //     timeout={{enter: 300, exit: 50}}
                                //     classNames="item"
                                // > 
                                    <Todo
                                        completeTask={completeTask}
                                        removeTask={removeTask}
                                        id={taskList.id}
                                        key={uuid()}
                                        title={taskList.title}
                                        index={taskList.id}
                                        selectedTask={selectedTask}
                                        isCompleted={taskList.isCompleted}
                                    />
                                // </CSSTransition>
                            ))}
                        {/* </TransitionGroup> */}
                        {/* {provided.placeholder} */}
                    </ul>
                    {/* <TransitionGroup>
                        <CSSTransition timeout={300} classNames="item"> */}
                            <span className={filteredTasks.length === 0 ? "empty" : "empty hide"} > 
                                {filteredTasks.length === 0 && filters === "completed" ? "Нет завершенных задач" : filteredTasks.length === 0 && "Нет активных задач"} 
                            </span>
                        {/* </CSSTransition>
                    </TransitionGroup> */}
                </div>
        //     )}
        // </Droppable>
    );
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
        removeTask: (id) => dispatch(removeTaskAction(id)),
        completeTask: (id) => dispatch(completeTaskAction(id)),
        selectedTask: (id) => dispatch(selectTaskAction(id)),
    }
};

TodoList.defaultProps = {
    tasksList: [],
    removeTask: () => {},
    completeTask: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);