import React from 'react';
import ReactDOM from 'react-dom';
import initState from './storeUtils/initialStoreState';
import rootReducer from './storeUtils/rootReducer';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { localStorageSync } from './Utils/localStorageUtil';

import './index.css';
import './theme/filter.panel.css';
import './theme/list.panel.css';
import './theme/add.edit.panel.css';

import App from './App';

export const store = createStore(rootReducer, initState, applyMiddleware(localStorageSync));

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);
