import './App.css';
import React, {Component} from 'react';
import List from './components/ListPanel/List';
import Filters from './components/FilterPanel/Filters';
import AddOrEditPanel from './components/AddEditPanel/AddOrEditPanel';





export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Filters/>

                <List/>

                <AddOrEditPanel/>
            </div>
        );
    }
}

// const addProp = props => mapProps((props) => {
//     return {
//         myProps: props.myProps,
//         additionalProp: 'Ololo'
//     }
// });
//
// function innerComponent(props) {
//     return (
//         <div>Some content and, maybe, couple props = {props.myProps} and {props.additionalProp}</div>
//     )
// }
//
// const App = compose(
//     addProp
// )(innerComponent);
//
// export default App;








/*
sample for console:
let toDoList = [{
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
