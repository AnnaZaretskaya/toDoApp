// there were 3 options to update component without unsafe_componentWillReceiveProps
// 1. use static getDerivedStateFromProps with all filters handlers inside (leads to tremendous method size)
// 2. merge render and logic (not works for my case)
// 3. use memoize.
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization

import React, {Component} from 'react';
import ToDoItem from './toDoItem';
import CompleteAllToggle from './CompleteAllToggle';
import DeleteCompleted from './DeleteCompleted';
import Left from './Left';
import {Utils} from '../utils'
import '../styles/list.panel.css';

class List extends Component {
    onDelete(id) {
        this.props.onDelete(id);
    }

    onEdit(item) {
        this.props.onEdit(item);
    }

    onDoneToggle(id) {
        this.props.onDoneToggle(id);
    }

    applyFilters() {

        if (Utils.isEqual(this.props.filters, {
            showUnDone: false,
            content: '',
            priorities: [],
            selectedTags: []
        })) {
            return this.props.list;
        }

        let filteredList = [].concat(this.props.list);

        filteredList = this.applyShowUnDone(filteredList);
        filteredList = this.applyContentFilter(filteredList);
        filteredList = this.applyPrioritiesFilter(filteredList);
        filteredList = this.applyTagsFilter(filteredList);

        return filteredList;
    }

    applyShowUnDone(list) {
        if (this.props.filters.showUnDone) {
            list = list.filter((item) => {
                return item.isDone === false;
            });
        }
        return list;
    }

    applyContentFilter(list) {
        list = list.filter((item) => {
            return (item.title.includes(this.props.filters.content) || item.description.includes(this.props.filters.content))
        });
        return list;
    }

    applyPrioritiesFilter(list) {
        if (this.props.filters.priorities.length) {
            list = list.filter((item) => {
                return this.props.filters.priorities.includes(item.priority)
            });
        }
        return list;
    }

    applyTagsFilter(list) {
        if (this.props.filters.selectedTags.length) {
            list = list.filter((item) => {
                return this.props.filters.selectedTags.some((selectedTag) => {
                    return item.tags.split(', ').includes(selectedTag);
                });
            });
        }
        return list;
    }

    getNumberCompleted() {
        return this.props.list.filter((item) => {
            return item.isDone === true
        }).length
    }

    render() {
        let toDoList;
        let list = this.applyFilters();

        if (list.length) {
            toDoList = list.map(item => {
                return (
                    <ToDoItem
                        key={item.id}
                        item={item}
                        onDelete={this.onDelete.bind(this)}
                        onEdit={this.onEdit.bind(this)}
                        onDoneToggle={this.onDoneToggle.bind(this)}/>
                );
            });
        }
        return (
            <main className="list-container">
                <CompleteAllToggle
                    onChange={this.props.onDoneAllToggle.bind(this)}
                    isChecked={this.props.areAllItemsCompleted}/>
                <DeleteCompleted
                    onDeleteAllCompleted={this.props.onDeleteAllCompleted.bind(this)}
                    number={this.getNumberCompleted()}/>
                <Left number={this.props.list.length - this.getNumberCompleted()}/>
                {toDoList}
            </main>
        );
    }
}

export default List;
