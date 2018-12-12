import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Filters from './components/Filters';
import List from'./components/List';
import AddEditItem from'./components/AddEditItem';
import $ from 'jquery';


class App extends Component {

    deleteToDoItem(id) {
         let newLIst = this.state.list.filter(item => item.id !== id);
        this.updateLocalStorage(newLIst);
        this.setState({list: newLIst});
    }

    updateLocalStorage(list) {
        localStorage.setItem('toDoList', JSON.stringify(list));
    }



    editToDoItem(id) {
        let currentItem = this.state.list.find((item) => item.id === id);
        //console.log('App get id =', id);
        console.log('App this.state.list =', this.state.list);
        this.setState({ currentItem: currentItem });
    }

    applyFilters() {

    }

    componentWillMount() {
        this.setState({
            filters: {
                showFinishedTasks: false,
                taskFilter: '',
                selectedTags: ''
            },
            currentItem: {
                id: null,
                title: '',
                description: '',
                tags: [],
                priority: 2
            },
            list: JSON.parse(localStorage.getItem('toDoList')) || []
        });

    }

    componentDidMount() {
        this.subscribeEvents();
    }

    subscribeEvents() {

    }

    createToDoItem(newItem) {
        this.state.list.push(newItem);
        this.updateLocalStorage(this.state.list);
        this.setState({list: this.state.list});
    }

    updateTagList() {
        let tempTagList = [];
        let tagList = [];

        this.state.list.forEach((item) => {
            tempTagList = tempTagList.concat(item.tags);
        });
        tempTagList.forEach(tag => {
            if (!tagList.includes(tag)) {
                tagList.push(tag);
            }
        });

        return tagList;
    }

    render() {

        //console.log('in App render  currentItem =', this.state.currentItem);

        return (
            <div className="app">
                <Filters
                    config={this.state.filterConfig}
                    onFiltersChange={this.applyFilters.bind(this)}
                    tags={this.updateTagList()}/>
                <List
                    list={this.state.list}
                    onDelete={this.deleteToDoItem.bind(this)}
                    onEdit={this.editToDoItem.bind(this)}/>
                <AddEditItem
                    onAddItem={this.createToDoItem.bind(this)}
                    currentItem={this.state.currentItem}/>
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