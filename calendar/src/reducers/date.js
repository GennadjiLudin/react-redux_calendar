import { CHANGE_MONTH, CHANGE_YEAR } from '../actions/actionHeader';

import { 
    getPrevMonth, 
    getNextMonth, 
} from '../helpers/helpers';

const initialState = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
}

export const date = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case CHANGE_MONTH: 
            return {
                ...state,
                month: payload.type === "next" ? getNextMonth(state.month) : getPrevMonth(state.month),
            }
        case CHANGE_YEAR: 
            return {
                ...state,
                year: payload.type === "next" ? state.year + 1 : state.year - 1,
            }
        default:
            return state;
    }
}