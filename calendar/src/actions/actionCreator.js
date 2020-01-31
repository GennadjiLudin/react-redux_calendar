
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const CHANGE_FILTERS = 'CHANGE_FILTERS';
export const CHANGE_TASK = 'CHANGE_TASK';
export const DRAG_HAPPENED = 'DRAG_HAPPENED';


export const addTask = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted,
});

export const removeTask = id => ({
    type: REMOVE_TASK,
    id,
})

export const completeTask = id => ({
    type: COMPLETE_TASK,
    id,
})

export const changeFilter = activeFilter => ({
    type: CHANGE_FILTERS,
    activeFilter,
})

export const changeTask = (id, text) => ({
    type: CHANGE_TASK,
    id,
    text,
})

export const sortTasks = (
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
) => ({
        type: DRAG_HAPPENED,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
    })