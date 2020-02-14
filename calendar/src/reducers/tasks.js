import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_TASK, DRAG_HAPPENED, SELECT_DAY, SELECT_TASK, CHANGE_ADD_MODE } from '../actions/actionCreator';

const initialState = {
    allDays: {
        20200105: {
            id: 20200105,
            tasks: [
                {
                    id: 1,
                    title: "Задача 1",
                    description: "То что нужно, чтобы выполнить задачу 1",
                    time: "14:30",
                    isCompleted: false,
                },
                {
                    id: 2,
                    title: "Задача 2",
                    description: "То что нужно, чтобы выполнить задачу 2",
                    time: "14:30",
                    isCompleted: false,
                },
                {
                    id: 3,
                    title: "Задача 3",
                    description: "То что нужно, чтобы выполнить задачу 3",
                    time: "14:30",
                    isCompleted: false,
                },
                {
                    id: 4,
                    title: "Задача 4",
                    description: "То что нужно, чтобы выполнить задачу 4",
                    time: "14:30",
                    isCompleted: false,
                },
                {
                    id: 5,
                    title: "Задача 5",
                    description: "То что нужно, чтобы выполнить задачу 5",
                    time: "14:30",
                    isCompleted: false,
                },
                {
                    id: 6,
                    title: "Задача 6",
                    description: "То что нужно, чтобы выполнить задачу 6",
                    time: "14:30",
                    isCompleted: false,
                },
                {
                    id: 7,
                    title: "Задача 7",
                    description: "То что нужно, чтобы выполнить задачу 7",
                    time: "14:30",
                    isCompleted: false,
                },
                {
                    id: 8,
                    title: "Задача 8",
                    description: "То что нужно, чтобы выполнить задачу 8",
                    time: "14:30",
                    isCompleted: false,
                },
            ],
        },
    },
    selectedDay: null,
    selectedTask: null,
    isAddMode: false,
}

const tasks = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SELECT_DAY:
            let newDays = {...state.allDays};
            if (!newDays[payload.id]) {
                newDays[payload.id] = {
                    id: payload.id,
                    tasks: [],
                };
            }
            return {
                ...state, 
                allDays: newDays,
                selectedDay: newDays[payload.id],
                selectedTask: newDays[payload.id].tasks[0],
            };
        case SELECT_TASK:
            let newSelectTasks = [...state.selectedDay.tasks].find(task => task.id === payload.taskId);
            return {
                ...state,
                selectedTask: newSelectTasks,
            }
        case CHANGE_ADD_MODE:
            return {
                ...state,
                isAddMode: !payload.isAddMode,
            }
        case ADD_TASK:
            let newAddTask = {
                ...state,
                selectedTask: {
                    id: payload.taskId,
                    title: payload.title,
                    description: payload.description,
                    isCompleted: payload.isCompleted,
                }
            }

            let newAddTaskInSelectedDay = {
                ...state,
                selectedDay: {
                    ...state.selectedDay,
                    tasks: [
                        ...state.selectedDay.tasks,
                        newAddTask,
                    ]
                },
            }
            return {
                ...state, 
                selectedTask: newAddTask,
                selectedDay: newAddTaskInSelectedDay,
                allDays: {
                    ...state.allDays,
                    [payload.selectedId]: newAddTaskInSelectedDay,
                },
            };
        case REMOVE_TASK:
            let newSelectedDay = {
                ...state.selectedDay,
                tasks: state.selectedDay.tasks.filter(task => task.id !== payload.taskId)
            };
            
            return {
                ...state,
                selectedDay: newSelectedDay,
                allDays: {
                    ...state.allDays,
                    [payload.selectedId]: newSelectedDay,
                },
            };
        case COMPLETE_TASK:
            let newStateTasks = {
                ...state.selectedDay,
                tasks: state.selectedDay.tasks.map(task => {
                        let newTask = {...task};
                        if(newTask.id === payload.taskId) {
                            newTask.isCompleted = !newTask.isCompleted;
                        }
                        return newTask;
                    })
                };
            return {
                ...state,
                selectedDay: newStateTasks,
                allDays: {
                    ...state.allDays,
                    [payload.selectedId]: newStateTasks,
                },
            };
        case CHANGE_TASK:
            let newChangeTask = {
                ...state.selectedTask,
                title: payload.title,
                description: payload.description,
            }

            let newSelectedDayTasks = {
                ...state.selectedDay,
                tasks: state.selectedDay.tasks.map(task => {
                    let newChangeTaskDay = {...task};
                    if(newChangeTaskDay.id === payload.taskId) {
                        newChangeTaskDay = newChangeTask;
                    }
                    return newChangeTaskDay;
                })
            }
            return {
                ...state,
                selectedDay: newSelectedDayTasks,
                allDays: {
                    ...state.allDays,
                    [payload.selectedId]: newSelectedDayTasks,
                },
                selectedTask: newChangeTask,
            };
        // case DRAG_HAPPENED:
        //         let newState = [...state.selectedDay.tasks];
        //         const taskReplaced = newState.splice(payload.droppableIndexStart, 1);
        //         newState.splice(payload.droppableIndexEnd, 0, ...taskReplaced);
        //     return {
        //         ...state,
        //         selectedDay: newState,
        //         allDays: {
        //             ...state.allDays,
        //             [payload.selectedId]: newState,
        //         },
        //     };
        default:
            return state;
    }
}

export default tasks;