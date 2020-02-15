import React, { useState } from 'react';
import { connect } from 'react-redux';

import { changeTaskAction, changeIsAddModeAction, addTaskAction } from '../../actions/actionCreator';
import ReadOnlyTask from '../../components/ReadOnlyTask/ReadOnlyTask';
import EditModeTask from '../../components/EditModeTask/EditModeTask';
import AddMode from '../../components/AddMode/AddMode';

import './Editbox.scss';

const Editbox = (props) => {
    const { changeTask, selectedDay, selectedTask, isAddMode, changeIsAdd, addTask } = props;
    const [editMode, setEditMode] = useState(false);

    return (
        <div className="editbox">
            {selectedDay && 
                <div className="editbox__task">
                    {isAddMode ? (
                        <AddMode changeIsAdd={changeIsAdd} isAddMode={isAddMode} addTask={addTask} selectedDay={selectedDay} />
                        ) : (
                            selectedTask ? (
                                !editMode ? (
                                        <ReadOnlyTask selectedTask={selectedTask} setEditMode={setEditMode} editMode={editMode} />
                                    ) : (
                                        <EditModeTask selectedDay={selectedDay} selectedTask={selectedTask} setEditMode={setEditMode} editMode={editMode} changeTask={changeTask} />
                                    )
                            ) : (
                                <div>Выберете задачу</div>
                            )
                        )
                    }                   
                </div>
            } 
        </div>
    );
};

const mapStateToProps = state => {
    const { selectedDay, selectedTask, isAddMode } = state.tasks;
    return {
        selectedDay,
        selectedTask,
        isAddMode,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeTask: (id, selectedId, title, description) => dispatch(changeTaskAction(id, selectedId, title, description)),
        changeIsAdd: (isAddMode) => dispatch(changeIsAddModeAction(isAddMode)),
        addTask: (taskId, selectedId, title, description, isCompleted) => dispatch(addTaskAction(taskId, selectedId, title, description, isCompleted)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Editbox);