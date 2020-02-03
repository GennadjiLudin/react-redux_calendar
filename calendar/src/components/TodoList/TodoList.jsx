import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Droppable } from "react-beautiful-dnd";

import Todo from '../Todo/Todo';

import './TodoList.scss';

const TodoList = (props) => {
    const {tasksList, removeTask, completeTask, activeFilter} = props;

    return (
        <Droppable droppableId={String(Date.now())}>
            {provided => (
                <>
                    <ul {...provided.droppableProps} ref={provided.innerRef} className="todo-list">
                        <TransitionGroup>
                            {tasksList.map(({id, text, isCompleted}, index) => (
                                <CSSTransition
                                    key={id}
                                    timeout={{enter: 300, exit: 50}}
                                    classNames="item"
                                > 
                                    <Todo
                                        completeTask={completeTask}
                                        removeTask={removeTask}
                                        id={id}
                                        key={id}
                                        text={text}
                                        index={index}
                                        isCompleted={isCompleted}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                        {provided.placeholder}
                    </ul>
                    <TransitionGroup>
                        <CSSTransition timeout={300} classNames="item">
                            <span className={tasksList.length === 0 ? "empty" : "empty hide"} > {tasksList.length === 0 && activeFilter === "completed" ? "No completed tasks" : tasksList.length === 0 && "No active tasks"} </span>
                        </CSSTransition>
                    </TransitionGroup>
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