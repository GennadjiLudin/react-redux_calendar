import React, { useState } from 'react';

import ReadOnlyTask from '../../components/ReadOnlyTask/ReadOnlyTask';
import EditModeTask from '../../components/EditModeTask/EditModeTask';

import './SelectedTask.scss';

const SelectedTask = (props) => {
    const { changeTask, selectedTask } = props;
    const [editMode, setEditMode] = useState(false);

    return (
        <>
            {!editMode ? (
                <ReadOnlyTask selectedTask={selectedTask} setEditMode={setEditMode} editMode={editMode} />
            ) : (
                <EditModeTask selectedTask={selectedTask} setEditMode={setEditMode} editMode={editMode} changeTask={changeTask} />
            )}  
        </>               
    );
};

export default SelectedTask;