
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const CHANGE_FILTERS = 'CHANGE_FILTERS';
export const CHANGE_TASK = 'CHANGE_TASK';
export const DRAG_HAPPENED = 'DRAG_HAPPENED';
export const SELECT_DAY = 'SELECT_DAY';
export const SELECT_TASK = 'SELECT_TASK';
export const CHANGE_ADD_MODE = 'CHANGE_ADD_MODE';
export const GET_ALL_DAYS = 'GET_ALL_DAYS';

export const getAllDaysAction = () => {
    let allDays = localStorage.getItem('allDays');
    return dispatch => {
        dispatch({
            type: GET_ALL_DAYS,
            payload: {
                allDays: JSON.parse(allDays),
            }
        })
    }
}

export const addTaskAction = (taskId, title, description, isCompleted) => ({
    type: ADD_TASK,
    payload: {
        taskId,
        title,
        description,
        isCompleted,
    }
});

export const changeIsAddModeAction = (isAddMode) => ({
    type: CHANGE_ADD_MODE,
    payload: {
        isAddMode,
    }
})

export const selectDayAction = id => ({
    type: SELECT_DAY,
    payload: {
        id,
    }
})

export const selectTaskAction = taskId => ({
    type: SELECT_TASK,
    payload: {
        taskId,
    }
})

export const removeTaskAction = (taskId) => ({
    type: REMOVE_TASK,
    payload: {
        taskId,
    }
})

export const completeTaskAction = (taskId) => ({
    type: COMPLETE_TASK,
    payload: {
        taskId,
    }
})

export const changeFilterAction = activeFilter => ({
    type: CHANGE_FILTERS,
    payload: {
        activeFilter,
    }
})

export const changeTaskAction = (taskId, title, description) => ({
    type: CHANGE_TASK,
    payload: {
        taskId,
        title,
        description,
    }
})

export const sortTasksAction = (
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => ({
        type: DRAG_HAPPENED,
        payload: {
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    })