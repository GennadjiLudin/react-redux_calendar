import React, { useState } from 'react';
import { connect } from 'react-redux';

import { changeTaskAction, changeIsAddModeAction, addTaskAction } from '../../actions/actionCreator';
import AddMode from '../../components/AddMode/AddMode';
import SelectedTask from '../../components/SelectedTask/SelectedTask';

import './Editbox.scss';

const Editbox = (props) => {
    const { changeTask, selectedDay, selectedTask, isAddMode, changeIsAdd, addTask } = props;

    return (
        <div className="editbox">
            {selectedDay && 
                <div className="editbox__task">
                    {isAddMode ? (
                        <AddMode changeIsAdd={changeIsAdd} isAddMode={isAddMode} addTask={addTask} />
                        ) : (
                            selectedTask ? (
                                <SelectedTask changeTask={changeTask} selectedTask={selectedTask} />
                            ) : (
                                <div className="editbox-no-tasks">Выберете задачу</div>
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
        changeTask: (id, title, description) => dispatch(changeTaskAction(id, title, description)),
        changeIsAdd: (isAddMode) => dispatch(changeIsAddModeAction(isAddMode)),
        addTask: (taskId, title, description, isCompleted) => dispatch(addTaskAction(taskId, title, description, isCompleted)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Editbox);