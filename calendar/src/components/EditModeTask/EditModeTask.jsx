import React, { useState } from 'react';

import './EditModeTask.scss';

const EditModeTask = (props) => {
    const {selectedTask, setEditMode, editMode, changeTask, selectedDay} = props;
    const [title, setTitle] = useState(selectedTask.title);
    const [description, setDescription] = useState(selectedTask.description);

    const handleClick = () => {
        setEditMode(!editMode);
        changeTask(selectedTask.id, selectedDay.id, title, description);
    }

    return (
        <>
            <label htmlFor="title">Задача</label>
            <input type="text" name="title" id="description" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="description">Описание</label>
            <textarea name="description" id="description" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button onClick={() => handleClick()} >Save</button>
            <button onClick={() => setEditMode(!editMode)}>Cancel</button>
        </>
    )
}

export default EditModeTask;