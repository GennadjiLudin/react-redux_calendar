import { ADD_TASK, GET_ALL_DAYS, REMOVE_TASK, COMPLETE_TASK, CHANGE_TASK, /*DRAG_HAPPENED,*/ SELECT_DAY, SELECT_TASK, CHANGE_ADD_MODE } from '../actions/actionCreator';

const TASKS = {
    allDays: {},
    selectedDay: null,
    selectedTask: null,
    isAddMode: false,
};



const tasks = (state = TASKS, action) => {
    const { type, payload } = action;
    const setLocalStorage = newAllDays =>  localStorage.setItem("allDays", JSON.stringify(newAllDays));
    let newAllDaysObj;

    switch(type) {
        case GET_ALL_DAYS:
            return {
                ...state,
                allDays: payload.allDays ? payload.allDays : state.allDays,
            }
        case SELECT_DAY:
            let newDays = {...state.allDays};
            if (!newDays[payload.id]) {
                newDays[payload.id] = {
                    id: payload.id,
                    dayTitle: `${payload.day}.${payload.month}.${payload.year}`,
                    tasks: [],
                };
            }
            console.log(newDays[payload.id])
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
                id: payload.taskId,
                title: payload.title,
                description: payload.description,
                isCompleted: payload.isCompleted,
            }

            let newAddTaskInSelectedDay = {
                ...state.selectedDay,
                tasks: [
                    ...state.selectedDay.tasks,
                    newAddTask,
                ]
            }

            newAllDaysObj =  {
                ...state.allDays,
                [state.selectedDay.id]: newAddTaskInSelectedDay,
            }

            setLocalStorage(newAllDaysObj);
            return {
                ...state, 
                selectedTask: newAddTask,
                selectedDay: newAddTaskInSelectedDay,
                allDays: newAllDaysObj,
            };
        case REMOVE_TASK:
            let newSelectedDay = {
                ...state.selectedDay,
                tasks: state.selectedDay.tasks.filter(task => task.id !== payload.taskId)
            };

            newAllDaysObj =  {
                ...state.allDays,
                [state.selectedDay.id]: newSelectedDay,
            }

            setLocalStorage(newAllDaysObj);
            return {
                ...state,
                selectedDay: newSelectedDay,
                allDays: newAllDaysObj,
                selectedTask: payload.taskId === state.selectedTask.id ? null : state.selectedTask,
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

            newAllDaysObj =  {
                ...state.allDays,
                [state.selectedDay.id]: newStateTasks,
            }

            setLocalStorage(newAllDaysObj);
            return {
                ...state,
                selectedDay: newStateTasks,
                allDays: newAllDaysObj,
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

            newAllDaysObj =  {
                ...state.allDays,
                [state.selectedDay.id]: newSelectedDayTasks,
            }

            setLocalStorage(newAllDaysObj);
            return {
                ...state,
                selectedDay: newSelectedDayTasks,
                allDays: newAllDaysObj,
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