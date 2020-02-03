import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_TASK, DRAG_HAPPENED, SELECT_DAY } from '../actions/actionCreator';

const initialState = {
    allDays: {
        20200103: {
            id: 20200103,
            tasks: [
                {
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    title: "Hellow worlds",
                    isCompleted: false,
                },
                {
                    title: "Hellow worlds",
                    isCompleted: false,
                },
            ]
        }
    },
    selectedDay: null,
}

// const TASKS = [
//     {
//         id: 1,
//         text: 'Learn ReactJS',
//         isCompleted: true,
//     },
//     {
//         id: 2,
//         text: 'Learn Router',
//         isCompleted: false,
//     },
//     {
//         id: 3,
//         text: 'Learn Redux',
//         isCompleted: false,
//     },
// ];

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
        // case REMOVE_TASK:
        //     return {...state.tasks.filter(task => task.id !== payload.id)};
        // case COMPLETE_TASK:
        //     return {
        //         ...state.tasks.map(task => {
        //             let newTask = {...task};
        //             if(newTask.id === payload.id) {
        //                 newTask.isCompleted = !newTask.isCompleted;
        //             }
        //             return newTask;
        //         })
        //     };
        // case CHANGE_TASK:
        //     return {
        //         ...state.tasks.map(task => {
        //             let newTask = {...task};
        //             if(newTask.id === payload.id) {
        //                 newTask.text = payload.text;
        //             }
        //             return newTask;
        //         })
        //     };
        // case DRAG_HAPPENED:
        //         let newState = {...state.tasks};
        //         const taskReplaced = newState.splice(droppableIndexStart, 1);
        //         newState.splice(droppableIndexEnd, 0, ...taskReplaced);
        //     return newState;
        default:
            return state;
    }
}

export default tasks;