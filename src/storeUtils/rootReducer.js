import { list, filters } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    filters,
    list
});

export default rootReducer;
