import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './storeUtils/rootReducer';
import { ACTION_TYPE } from './storeUtils/actions';
import './index.css';
import './theme/filter.panel.css';
import './theme/list.panel.css';
import './theme/add.edit.panel.css';

import App from './App';

let initState = {
    filters: {
        showUnDone: false,
        content: '',
        priorities: [],
        selectedTags: []
    },
    list: JSON.parse(localStorage.getItem('toDoList')) || []
};

const localStorageSync = store => next => action => {
    const result = next(action);

    if (action.type === ACTION_TYPE.LIST_EDIT) {
        localStorage.setItem('toDoList', JSON.stringify(store.getState().list))
    }
    return result;
};

export const store = createStore(rootReducer, initState, applyMiddleware(localStorageSync));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);
