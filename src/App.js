import React, {Component} from 'react';
import './App.css';
import Filters from './components/FilterPanel/Filters';
import { connect } from 'react-redux';
import List from './components/ListPanel/List';
import AddOrEditForm from './components/AddEditPanel/AddOrEditForm';
import { actionCreators } from './storeUtils/actions';

class App extends Component {
    state = {
        shownItem: {
            id: null,
            title: '',
            description: '',
            priority: 2,
            tags: ''
        }
    };

    makeTagList() {
        let allTags = [];
        let uniqueTagList = [];

        this.props.data.list.forEach((item) => {
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

    chooseItem(item) {
        this.setState({shownItem: item});
    }

    render() {
        return (
            <div className="app">
                <Filters
                    config={this.props.data.filters}
                    action={actionCreators.applyFilter}
                    tags={this.makeTagList()}/>

                <List
                    list={this.props.data.list}
                    filters={this.props.data.filters}
                    doneToggle={actionCreators.doneToggle}
                    markAllDone={actionCreators.markAllDone}
                    chooseItem={this.chooseItem.bind(this)}
                    deleteItem={actionCreators.deleteItem}/>

                <AddOrEditForm
                    shownItem={this.state.shownItem}
                    createItem={actionCreators.createItem}
                    chooseItem={this.chooseItem.bind(this)}
                    updateItem={actionCreators.updateItem}/>
            </div>
        );
    }
}
// function that will give App access to data in store as props after being wrapped into connect
function mapStateToProps (data) {
    return {
        data: data
    }
}
// wrap App into Connect React Component
export default connect(mapStateToProps, {actionCreators})(App);

/*
sample for console:
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
            title: 'to do something',
            description: 'Ololo-trololol',
            tags: 'tag, tag2, tag5',
            priority: '3',
            isDone: true
        }, {
            id: 4,
            title: 'to do something else',
            description: 'Ololo-trololol',
            tags: 'tag3, tag1 tag7, tag7',
            priority: '3',
            isDone: false
        }, {
            id: 5,
            title: 'to do more than you can',
            description: 'Ololo-trololol',
            tags: 'tag1, tag5 tag1, tag4',
            priority: '3',
            isDone: false
        }];
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
* */
