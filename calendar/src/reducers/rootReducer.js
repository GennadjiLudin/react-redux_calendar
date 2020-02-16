import { combineReducers } from 'redux';
import date from './date';
import filters from './filters';
import tasks from './tasks';

const rootReducer = combineReducers({
    date,
    filters,
    tasks,
});

export default rootReducer;