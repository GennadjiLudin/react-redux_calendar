import { CHANGE_MONTH, CHANGE_YEAR, TODAY } from '../actions/actionHeader';

import { 
    getPrevMonth, 
    getNextMonth, 
} from '../helpers/helpers';

let DATES = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
};

const date = (state = DATES, action) => {
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
        case TODAY:
            return {
                ...state,
                month: new Date().getMonth(),
                year: new Date().getFullYear(),
            }
        default:
            return state;
    }
}

export default date;