import React from 'react';
import { store } from './storeUtils/store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import './theme/filter.panel.css';
import './theme/list.panel.css';
import './theme/add.edit.panel.css';

import App from './App';

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);
// I cant create store in this file because it is prohibited to export some variable and render to DOM
// in same file by jest testing functionality.
/*

привести в порядок моки, убрать неиспользуемые константы
прикрутить нотификацию
проверить снапы

потестить рутовый редюсер?
тесты
локализацию ошибок прикрутить
непротестированы хендлеры(подвязка к кликам)
 */


// describe('', () => {
//     it('', () => {
//     });
// });


/*
var toDoList = [{
    id: 1,
    title: 'to study React',
    description: 'Ololo-trololol',
    tags: ['evaluation', 'job', 'suffering'],
    priority: '1',
    isDone: false
}, {
    id: 2,
    title: 'to study js',
    description: 'Ololo-trololol',
    tags: ['evaluation', 'job', 'not big suffering'],
    priority: '2',
    isDone: false
}, {
    id: 3,
    title: 'to do something',
    description: 'Ololo-trololol',
    tags: ['tag', 'tag2', 'tag5'],
    priority: '3',
    isDone: true
}, {
    id: 4,
    title: 'to do something else',
    description: 'Ololo-trololol',
    tags: ['tag3', 'tag1 tag7', 'tag7'],
    priority: '3',
    isDone: false
}, {
    id: 5,
    title: 'to do more than you can',
    description: 'Ololo-trololol',
    tags: ['tag1', 'tag5 tag1', 'tag4'],
    priority: '3',
    isDone: false
}];
localStorage.setItem('toDoList', JSON.stringify(toDoList));

* */