import React, {Component} from 'react';
//import ReactDOM from 'react-dom'
import './App.css';
import Filters from './components/FilterPanel/Filters';
import List from './components/ListPanel/List';
import AddItem from './components/AddEditPanel/AddItem';
import EditItem from './components/AddEditPanel/EditItem';

var debugMode = true;

class App extends Component {
    constructor() {
        super();
        this.addEditBlank = {
            id: null,
            title: '',
            description: '',
            tags: '', // я решила что здесь удобно работать со строкой, потому что никакой логики не завязано на тэгах
            priority: 2
        };

        this.filterBlank = {
            showUnDone: false,
            content: '',
            priorities: [],// я решила, что здесь нужно работать с массивами, потому что это соответствует моему чувству прекрасного
            selectedTags: [] // аналогично
        };

        this.state = {
            filters: Object.assign({}, this.filterBlank),
            currentItem: Object.assign({}, this.addEditBlank),
            list: JSON.parse(localStorage.getItem('toDoList')) || []
        };
    }

    updateLocalStorage(list) {
        localStorage.setItem('toDoList', JSON.stringify(list));
    }

    createToDoItem(newItem) {
        this.state.list.push(newItem);
        this.updateLocalStorage(this.state.list);
        this.setState({
            list: this.state.list,
        });
    }

    chooseToDoItem(item) {
        this.setState({ currentItem: item });
    }

    updateToDoItem(updatedItem) {
        debugMode&&console.log('i am in updateToDoItem, updatedItem is ', updatedItem);

        let index = this.state.list.findIndex((item) => item.id === updatedItem.id);
        updatedItem.isDone = this.state.list[index].isDone;


        this.state.list[index] = updatedItem;
        this.updateLocalStorage(this.state.list);

        this.setState({
            list: this.state.list,
            currentItem: Object.assign({}, this.addEditBlank)
        });
    }

    deleteToDoItem(id) {
        let newLIst = this.state.list.filter(item => item.id !== id);

        this.updateLocalStorage(newLIst);
        this.setState({
            list: newLIst,
            currentItem: Object.assign({}, this.addEditBlank)
        });
    }

    handleFilterChange(changes) {
        changes  = changes || {};

        this.setState({
            filters: Object.assign(this.state.filters, changes)
        });
    }

    onDoneToggle(id) {
        let index = this.state.list.findIndex((item) => item.id === id);

        this.state.list[index].isDone = !this.state.list[index].isDone;
        this.updateLocalStorage(this.state.list);
        this.setState({
            list: this.state.list
        });
    }

    completeAllToggle(doneState) {

        this.state.list.map((item) => {
            return item.isDone = doneState;
        });

        this.setState({
            list: this.state.list
        });
    }

    makeTagList() {

        let allTags = [];
        let uniqueTagList = [];

        this.state.list.forEach((item) => {
            if (item.tags) {
                allTags = allTags.concat(item.tags.split(', '))
            }
        });
        allTags.forEach(tag => {
            if (!uniqueTagList.includes(tag)) {
                uniqueTagList.push(tag);
            }
        });

        return uniqueTagList;
    }

    render() {
        let AddOrEditPanel;
        if (this.state.currentItem.id) {
            AddOrEditPanel =
                <EditItem
                    currentItem={this.state.currentItem}
                    onUpdateItem={this.updateToDoItem.bind(this)}/>
        } else {
            AddOrEditPanel =
                <AddItem
                    onAddItem={this.createToDoItem.bind(this)}/>
        }

        return (
            <div className="app">
                <Filters
                    config={this.state.filters}
                    onFiltersChange={this.handleFilterChange.bind(this)}
                    tags={this.makeTagList()}/>
                <List
                    list={this.state.list}
                    filters={this.state.filters}
                    onDelete={this.deleteToDoItem.bind(this)}
                    onEdit={this.chooseToDoItem.bind(this)}
                    onDoneToggle={this.onDoneToggle.bind(this)}
                    completeAllToggle={this.completeAllToggle.bind(this)}/>
                {AddOrEditPanel}
            </div>
        );
    }
}

export default App;

/*
let toDoList = [{
            id: 1,
            title: 'to study React',
            description: 'Ololo-trololol',
            tags: 'evaluation, job, suffering',
            priority: '1',
            isDone: false
        }, {
            id: 2,
            title: 'to study js',
            description: 'Ololo-trololol',
            tags: 'evaluation, job, not big suffering',
            priority: '2',
            isDone: false
        }, {
            id: 3,
            title: 'to buy milk',
            description: 'Ololo-trololol',
            tags: 'home, food, today',
            priority: '3',
            isDone: true
        }];
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
* */