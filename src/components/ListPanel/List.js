import Left from './components/Left';
import React, { Component } from 'react';
import ToDoItem from './components/toDoItem';
import DeleteCompleted from './components/DeleteCompleted';
import CompleteAllToggle from './components/CompleteAllToggle';
import { connect } from 'react-redux';
import { actionsList } from './List.actions';
import { compose, lifecycle } from "recompose";
import { actionsShared } from "../sharedComponents/shared.actions";

export let actions = {...actionsShared, ...actionsList};

export class List extends Component {

    // dreadful style
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
                        return item.tags.includes(selectedTag);
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
            ? actions.markAllDone(false)
            : actions.markAllDone(true);
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
                actions.deleteItem(item.id);
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
                        doneToggle={actions.doneToggle}
                        chooseItem={actions.chooseShownItem}
                        deleteItem={actions.deleteItem}
                        shownItemId={this.props.shownItemId}/>
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

export function mapStateToProps(data) {
    return {
        list: data.list,
        filters: data.filters,
        shownItemId: data.shownItem.id
    }
}

const enhance = compose(
    connect(mapStateToProps),
    lifecycle({
        componentDidCatch(error) {
            console.log('Oops, error!', error);
        }
    })
);

export default enhance(List);