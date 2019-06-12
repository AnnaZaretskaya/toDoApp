import initState from './initialStoreState';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { localStorageSync } from '../Utils/localStorageUtil';

export const store = createStore(rootReducer, initState, applyMiddleware(localStorageSync));
