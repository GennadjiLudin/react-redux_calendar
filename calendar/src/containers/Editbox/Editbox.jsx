import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { changeTaskAction } from '../../actions/actionCreator';

import './Editbox.scss';

const Editbox = (props) => {
    const { changeTask, selectedDay, selectedTask } = props;
    const [editMode, setEditMode] = useState(false);

    console.log(editMode);

    return (
        <div className="editbox">
            {selectedDay && (
                    selectedTask ? (
                        <div className="editbox__task" key={selectedTask.id}>
                            !editMode ? (
                                <span className="editbox__task__name">Задача</span>
                                <span className="editbox__task__title">
                                    {selectedTask.title}
                                </span>
                                <span className="editbox__task__name">Описание</span>
                                <span className="editbox__task__description">
                                    {selectedTask.description}
                                </span>
                                <button onClick={() => setEditMode(!editMode)}>Edit</button>
                            ) : (
                                <label htmlFor="title">Задача</label>
                                <input type="text" name="title" id="description" value={selectedTask.title} />
                                <label htmlFor="description">Описание</label>
                                <textarea name="description" id="description" cols="30" rows="10" value={selectedTask.description} />
                                <button>Save</button>
                                <button>Cancel</button>
                            )
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