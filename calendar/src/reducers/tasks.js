import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_TASK, DRAG_HAPPENED, SELECT_DAY } from '../actions/actionCreator';

const initialState = {
    allDays: {
        20200105: {
            id: 20200105,
            tasks: [
                {
                    id: 1,
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    id: 2,
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    id: 3,
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    id: 4,
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    id: 5,
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    id: 6,
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    id: 7,
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    id: 8,
                    title: "Hellow worlds",
                    isCompleted: false,
                },
            ]
        }
    },
    selectedDay: {
        id: 20200105,
        tasks: [
            {
                id: 1,
                title: "Hellow worlds",
                isCompleted: false,
            },
            {
                id: 2,
                title: "Hellow worlds",
                isCompleted: false,
            },
            {
                id: 3,
                title: "Hellow worlds",
                isCompleted: false,
            },
            {
                id: 4,
                title: "Hellow worlds",
                isCompleted: false,
            },
            {
                id: 5,
                title: "Hellow worlds",
                isCompleted: false,
            },
            {
                id: 6,
                title: "Hellow worlds",
                isCompleted: false,
            },
            {
                id: 7,
                title: "Hellow worlds",
                isCompleted: false,
            },
            {
                id: 8,
                title: "Hellow worlds",
                isCompleted: false,
            },
        ],
    },
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
            };
        // case ADD_TASK:
        //     return {
        //         ...state, 
        //         tasks: {
        //             id: payload.id,
        //             text: payload.text,
        //             isCompleted: payload.isCompleted,
        //         }
        //     };
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
        // case CHANGE_TASK:
        //     return {
        //         ...state.selectedDay.tasks.map(task => {
        //             let newTask = {...task};
        //             if(newTask.id === payload.id) {
        //                 newTask.title = payload.title;
        //             }
        //             return newTask;
        //         })
        //     };
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