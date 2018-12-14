import React, {Component} from 'react';
//import ReactDOM from 'react-dom'
import './App.css';
import Filters from './components/Filters';
import List from'./components/List';
import AddEditItem from'./components/AddEditItem';
var debugMode = true;

class App extends Component {
    constructor() {
        super();
        this.dummy = {
            id: null,
            title: '',
            description: '',
            tags: [],
            priority: 2
        };

        this.state = {
            filters: {
                showFinishedTasks: false,
                taskFilter: '',
                selectedTags: ''
            },
            currentItem: this.dummy,
            list: JSON.parse(localStorage.getItem('toDoList')) || []
        };
    }

    componentDidUpdate() {
        debugMode&&console.log('i am in componentDidUpdate, state is ', this.state);
    }

    updateLocalStorage(list) {
        localStorage.setItem('toDoList', JSON.stringify(list));
    }

    createToDoItem(newItem) {
        this.state.list.push(newItem);
        this.updateLocalStorage(this.state.list);
        this.setState({ list: this.state.list });
    }

    chooseToDoItem(id) {
        let currentItem = this.state.list.find((item) => item.id === id);
        this.setState({ currentItem: currentItem });
    }

    updateToDoItem(updatedItem) {
        debugMode&&console.log('i am in updateToDoItem, updatedItem is ', updatedItem);

        let index = this.state.list.findIndex((item) => item.id === updatedItem.id);
        this.state.list[index] = updatedItem;
        this.updateLocalStorage(this.state.list);
        this.setState({
            list: this.state.list,
            currentItem: this.dummy
        });
    }

    deleteToDoItem(id) {
        let newLIst = this.state.list.filter(item => item.id !== id);
        this.updateLocalStorage(newLIst);
        this.setState({
            list: newLIst,
            currentItem: this.dummy
        });
    }





    applyFilters() {

    }

    makeTagList() {
        let allTags = [];
        let uniqueTagList = [];

        this.state.list.forEach((item) => {
            allTags = allTags.concat(item.tags);
        });
        allTags.forEach(tag => {
            if (!uniqueTagList.includes(tag)) {
                uniqueTagList.push(tag);
            }
        });

        return uniqueTagList;
    }

    render() {

        return (
            <div className="app">
                <Filters
                    config={this.state.filterConfig}
                    onFiltersChange={this.applyFilters.bind(this)}
                    tags={this.makeTagList()}/>
                <List
                    list={this.state.list}
                    onDelete={this.deleteToDoItem.bind(this)}
                    onEdit={this.chooseToDoItem.bind(this)}/>
                <AddEditItem
                    onAddItem={this.createToDoItem.bind(this)}
                    currentItem={this.state.currentItem}
                    onUpdateItem={this.updateToDoItem.bind(this)}/>
            </div>
        );
    }
}

export default App;


/*
var toDoList = [{
    id: 1,
    title: 'to study React',
    description: 'Ololo-trololol',
    tags: ['evaluation', 'job', 'suffering'],
    priority: 1,
    isDone: false
}, {
    id: 2,
    title: 'to study js',
    description: 'Ololo-trololol',
    tags: ['evaluation', 'job', 'not big suffering'],
    priority: 2,
    isDone: false
}, {
    id: 3,
    title: 'to buy milk',
    description: 'Ololo-trololol',
    tags: ['home', 'food', 'today'],
    priority: 3,
    isDone: true
}];
localStorage.setItem('toDoList', JSON.stringify(toDoList));

*/