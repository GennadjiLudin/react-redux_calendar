import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Droppable } from "react-beautiful-dnd";
import uuid from 'react-uuid';

import Todo from '../Todo/Todo';

import './TodoList.scss';

const TodoList = (props) => {
    const {tasksList, removeTask, completeTask, activeFilter, selectedId} = props;
    return (
        <Droppable droppableId={String(uuid())}>
            {provided => (
                <>
                    <ul {...provided.droppableProps} ref={provided.innerRef} className="todo-list">
                        {/* <TransitionGroup> */}
                            {tasksList.map((taskList, index) => (
                                // <CSSTransition
                                //     key={uuid()}
                                //     timeout={{enter: 300, exit: 50}}
                                //     classNames="item"
                                // > 
                                    <Todo
                                        completeTask={completeTask}
                                        removeTask={removeTask}
                                        id={taskList.id}
                                        selectedId={selectedId}
                                        key={uuid()}
                                        title={taskList.title}
                                        index={index}
                                        isCompleted={taskList.isCompleted}
                                    />
                                // </CSSTransition>
                            ))}
                        {/* </TransitionGroup> */}
                        {provided.placeholder}
                    </ul>
                    {/* <TransitionGroup>
                        <CSSTransition timeout={300} classNames="item"> */}
                            <span className={tasksList.length === 0 ? "empty" : "empty hide"} > {tasksList.length === 0 && activeFilter === "completed" ? "No completed tasks" : tasksList.length === 0 && "No active tasks"} </span>
                        {/* </CSSTransition>
                    </TransitionGroup> */}
                </>
            )}
        </Droppable>
    );
}

TodoList.defaultProps = {
    tasksList: [],
    removeTask: () => {},
    completeTask: () => {},
}

export default TodoList;