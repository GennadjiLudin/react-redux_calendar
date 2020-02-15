import React, { useState } from 'react';
import uuid from 'react-uuid';

import './AddMode.scss';

const AddMode = (props) => {
    const { selectedDay, changeIsAdd, isAddMode, addTask } = props;
    const [addTitle, setAddTitle] = useState("");
    const [addDescription, setAddDescription] = useState("");

    console.log(selectedDay.id);
    const handleClick = (e) => {
        changeIsAdd(isAddMode);
        addTask(uuid(), selectedDay.id, addTitle, addDescription, false)
    }

    return (
        <>
            <label htmlFor="title">Задача</label>
            <input type="text" name="title" id="description" value={addTitle} onChange={(e) => setAddTitle(e.target.value)} />
            <label htmlFor="description">Описание</label>
            <textarea name="description" id="description" cols="30" rows="10" value={addDescription} onChange={(e) => setAddDescription(e.target.value)} />
            <button onClick={() => handleClick()} >Save</button>
            <button onClick={() => changeIsAdd(isAddMode)}>Cancel</button>
        </>
    )
}

export default AddMode;