import { CHANGE_FILTERS } from '../actions/actionCreator';

const BASE_FILTER = 'all';

const filters = (state = BASE_FILTER, {type, activeFilter}) => {
    switch (type) {
        case CHANGE_FILTERS:
            return activeFilter;
        default:
            return state;
    }
}

export default filters;