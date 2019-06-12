import { list } from './reducers/reducer.list';
import { filters } from './reducers/reducer.filters';
import { shownItem } from './reducers/reducer.addEdit';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    filters,
    list,
    shownItem
});

export default rootReducer;