import Left from './components/Left';
import { connect } from 'react-redux';
import { actions } from './List.actions';
import React, { Component } from 'react';
import { applyFilters } from './List.util';
import ToDoItem from './components/toDoItem';
import { compose, lifecycle } from "recompose";
import DeleteCompleted from './components/DeleteCompleted';
import CompleteAllToggle from './components/CompleteAllToggle';

export class List extends Component {

    state = {
        list: []
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
    };

    static getDerivedStateFromProps(props){
        return {
            list : applyFilters(props)
        };
    }

    render() {
        let toDoList;
        let list = this.state.list;

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
                    onChange={() => this.onDoneAllToggle()}
                    isChecked={this.areAllItemsCompleted(this)}/>
                <DeleteCompleted
                    onDeleteAllDone={() => this.onDeleteAllDone()}
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