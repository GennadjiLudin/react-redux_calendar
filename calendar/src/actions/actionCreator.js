
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const CHANGE_FILTERS = 'CHANGE_FILTERS';
export const CHANGE_TASK = 'CHANGE_TASK';
export const DRAG_HAPPENED = 'DRAG_HAPPENED';
export const SELECT_DAY = 'SELECT_DAY';


export const addTaskAction = (id, text, isCompleted) => ({
    type: ADD_TASK,
    payload: {
        id,
        text,
        isCompleted,
    }
});

export const selectDayAction = id => ({
    type: SELECT_DAY,
    payload: {
        id,
    }
})

export const removeTaskAction = (taskId, selectedId) => ({
    type: REMOVE_TASK,
    payload: {
        taskId,
        selectedId,
    }
})

export const completeTaskAction = (taskId, selectedId) => ({
    type: COMPLETE_TASK,
    payload: {
        taskId,
        selectedId,
    }
})

export const changeFilterAction = activeFilter => ({
    type: CHANGE_FILTERS,
    payload: {
        activeFilter,
    }
})

export const changeTaskAction = (id, text) => ({
    type: CHANGE_TASK,
    payload: {
        id,
        text,
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