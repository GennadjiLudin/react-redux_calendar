import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { changeTaskAction } from '../../actions/actionCreator';
import ReadOnlyTask from '../../components/ReadOnlyTask/ReadOnlyTask';
import EditModeTask from '../../components/EditModeTask/EditModeTask';

import './Editbox.scss';

const Editbox = (props) => {
    const { changeTask, selectedDay, selectedTask } = props;
    const [editMode, setEditMode] = useState(false);

    return (
        <div className="editbox">
            {selectedDay && (
                    selectedTask ? (
                        <div className="editbox__task" key={selectedTask.id}>
                            {!editMode ? (
                                <ReadOnlyTask selectedTask={selectedTask} setEditMode={setEditMode} editMode={editMode} />
                            ) : (
                                <EditModeTask selectedDay={selectedDay} selectedTask={selectedTask} setEditMode={setEditMode} editMode={editMode} changeTask={changeTask} />
                            )}
                        </div>
                    ) : (
                        <div>Выберете задачу</div>
                    )
            )} 
        </div>
    );
};

const mapStateToProps = state => {
    const { selectedDay, selectedTask } = state.tasks;
    return {
        selectedDay,
        selectedTask,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeTask: (id, selectedId, title, description) => dispatch(changeTaskAction(id, selectedId, title, description)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Editbox);