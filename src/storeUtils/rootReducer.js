import { list } from './reducer.list';
import { filters } from './reducer.filters';
import { shownItem } from './reducer.shownItem';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    filters,
    list,
    shownItem
});

export default rootReducer;
