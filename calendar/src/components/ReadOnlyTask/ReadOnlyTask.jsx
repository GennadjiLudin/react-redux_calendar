import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import './ReadOnlyTask.scss';

const ReadOnlyTask = (props) => {
    const {selectedTask, setEditMode, editMode} = props;

    return (
        <>
        <div className="editbox__task-wrap">
            <span className="editbox__task__name">Название</span>
            <span className="editbox__task__title">
                {selectedTask.title}
            </span>
            <span className="editbox__task__name">Описание</span>
            <span className="editbox__task__description">
                {selectedTask.description}
            </span> 
        </div>
            <FontAwesomeIcon
                className="editbox__edit-btn"
                onClick={() => setEditMode(!editMode)}
                icon={faEdit}
                title="Редактировать"
            />
        </>
    )
}

export default ReadOnlyTask;