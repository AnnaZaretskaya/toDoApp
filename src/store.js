import initState from './storeUtils/initialStoreState';
import rootReducer from './storeUtils/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { localStorageSync } from './Utils/localStorageUtil';

export const store = createStore(rootReducer, initState, applyMiddleware(localStorageSync));
