import { CHANGE_FILTERS } from '../actions/actionCreator';

const BASE_FILTER = 'all';

const filters = (state = BASE_FILTER, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_FILTERS:
            return payload.activeFilter;
        default:
            return state;
    }
}

export default filters;