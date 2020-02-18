import React, { useState } from 'react';

import Form from '../Form/Form';

import './EditModeTask.scss';

const EditModeTask = (props) => {
    const { selectedTask, setEditMode, editMode, changeTask } = props;
    const [title, setTitle] = useState(selectedTask.title);
    const [description, setDescription] = useState(selectedTask.description);

    const handleClick = () => {
        if (title.trim() !== '') {
            setEditMode(!editMode);
            changeTask(selectedTask.id, title, description);
        }
    }

    return (
        <Form
            changeMode={setEditMode}
            argument={!editMode}
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
            handleClick={handleClick}
        />
    )
}

export default EditModeTask;