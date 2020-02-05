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
        ]
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
            return {...state.selectedDay.tasks.filter(task => task.id !== payload.id)};
        case COMPLETE_TASK:
            return {
                ...state.selectedDay.tasks.map(task => {
                    let newTask = {...task};
                    if(newTask.id === payload.id) {
                        newTask.isCompleted = !newTask.isCompleted;
                    }
                    return newTask;
                })
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
        //         let newState = {...state.selectedDay.tasks};
        //         const taskReplaced = newState.splice(droppableIndexStart, 1);
        //         newState.splice(droppableIndexEnd, 0, ...taskReplaced);
        //     return newState;
        default:
            return state;
    }
}

export default tasks;