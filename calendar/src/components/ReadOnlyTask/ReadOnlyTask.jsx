import React from 'react';

import './ReadOnlyTask.scss';

const ReadOnlyTask = (props) => {
    const {selectedTask, setEditMode, editMode} = props;

    return (
        <>
            <span className="editbox__task__name">Задача</span>
            <span className="editbox__task__title">
                {selectedTask.title}
            </span>
            <span className="editbox__task__name">Описание</span>
            <span className="editbox__task__description">
                {selectedTask.description}
            </span>
            <button onClick={() => setEditMode(!editMode)}>Edit</button>
        </>
    )
}

export default ReadOnlyTask;