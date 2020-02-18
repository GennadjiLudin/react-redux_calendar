import React, { useState } from 'react';
import uuid from 'react-uuid';

import Form from '../Form/Form';

import './AddMode.scss';

const AddMode = (props) => {
    const { changeIsAdd, isAddMode, addTask } = props;
    const [addTitle, setAddTitle] = useState("");
    const [addDescription, setAddDescription] = useState("");

    const handleClick = () => {
        if (addTitle.trim() !== '') {
            changeIsAdd(isAddMode);
            addTask(uuid(), addTitle, addDescription, false)
        }
    }
    
    return (
        <Form
            changeMode={changeIsAdd}
            argument={isAddMode}
            title={addTitle}
            description={addDescription}
            setTitle={setAddTitle}
            setDescription={setAddDescription}
            handleClick={handleClick}
        />
    )
}

export default AddMode;