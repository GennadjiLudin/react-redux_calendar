import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import './Todo.scss';

const Todo = (props) => {
    const {title, isCompleted, removeTask, id, completeTask, index, selectedId} = props;

    return (
        // <Draggable draggableId={String(id)} index={index}>
        //     {provided => (
                <li /*{...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}*/ className="todo-item">
                    <FontAwesomeIcon 
                        onClick={() => completeTask(id)}
                        icon={isCompleted ? faCheck : faCircle}
                        className={isCompleted ? "mark-complete" : "mark"}
                    />
                        <span 
                            onClick={ () => {} }
                            className={isCompleted ? "completed text" : "text"}
                        >
                            {title}
                        </span>
                    <FontAwesomeIcon
                        onClick={() => removeTask(id, selectedId)}
                        icon={faTimes}
                        className="delete"
                    />
                </li>
        //     )}
        // </Draggable>
    );
}

Todo.defaultProps = {
    title: '',
    isCompleted: false,
    removeTask: () => {},
    completeTask: () => {},
    id: '',
}
  
export default Todo;