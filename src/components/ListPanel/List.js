import React, {Component} from 'react';
import ToDoItem from './toDoItem';
import CompleteAllToggle from './CompleteAllToggle';
import DeleteCompleted from './DeleteCompleted';
import Left from './Left';
import '../../theme/list.panel.css';

class List extends Component {

    applyFilters() {
        let filteredList = [].concat(this.props.list);
        let filters = Object.assign({}, this.props.filters);

        filteredList = this.filtersContainer.applyShowUnDone(filteredList, filters);
        filteredList = this.filtersContainer.applyContentFilter(filteredList, filters);
        filteredList = this.filtersContainer.applyPrioritiesFilter(filteredList, filters);
        filteredList = this.filtersContainer.applyTagsFilter(filteredList, filters);

        return filteredList;
    }

    filtersContainer = {
        applyShowUnDone:  (list, filters) => {
            if (filters.showUnDone) {
                list = list.filter((item) => {
                    return item.isDone === false;
                });
            }
            return list;
        },

        applyContentFilter: (list, filters) => {
            list = list.filter((item) => {
                return (item.title.includes(filters.content) || item.description.includes(filters.content))
            });
            return list;
        },

        applyPrioritiesFilter: (list, filters) => {
            if (filters.priorities.length) {
                list = list.filter((item) => {
                    return filters.priorities.includes(item.priority)
                });
            }
            return list;
        },

        applyTagsFilter: (list, filters) => {
            if (filters.selectedTags.length) {
                list = list.filter((item) => {
                    return filters.selectedTags.some((selectedTag) => {
                        return item.tags.split(', ').includes(selectedTag);
                    });
                });
            }
            return list;
        }

    };

    areAllItemsCompleted() {
        if (!this.props.list.length) {
            return false
        }

        return !this.props.list.some((item) => {
            return item.isDone === false;
        });
    }

    onDoneAllToggle() {
        this.areAllItemsCompleted()
            ? this.props.markAllDone(false)
            : this.props.markAllDone(true);
    }

    getNumberCompleted() {
        return this.props.list.filter((item) => {
            return item.isDone === true
        }).length
    }

    onDeleteAllDone() {
        this.props.list
            .filter((item) => {
                return item.isDone === true
                })
            .forEach((item) => {
                this.props.deleteItem(item.id);
                });
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
                        doneToggle={this.props.doneToggle}
                        chooseItem={this.props.chooseItem}
                        deleteItem={this.props.deleteItem}/>
                );
            });
        }

        return (
            <main className="list-container">
                <CompleteAllToggle
                    onChange={this.onDoneAllToggle.bind(this)}
                    isChecked={this.areAllItemsCompleted(this)}/>
                <DeleteCompleted
                    onDeleteAllDone={this.onDeleteAllDone.bind(this)}
                    number={this.getNumberCompleted()}/>
                <Left
                    number={this.props.list.length - this.getNumberCompleted()}/>
                {toDoList}
            </main>
        );
    }
}

export default List;
