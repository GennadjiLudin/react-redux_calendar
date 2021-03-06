import React from 'react';
// import { Draggable } from 'react-beautiful-dnd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

import './Todo.scss';

const Todo = (props) => {
    const {title, isCompleted, removeTask, id, completeTask, selectedTask} = props;

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
                            onClick={ () => selectedTask(id) }
                            className={isCompleted ? "completed text" : "text"}
                            title={title}
                        >
                            {title}
                        </span>
                    <FontAwesomeIcon
                        onClick={() => removeTask(id)}
                        icon={faTrashAlt}
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