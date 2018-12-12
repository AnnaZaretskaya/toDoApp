import React, {Component} from 'react';
import ToDoItem from'./toDoItem';
import $ from 'jquery';

class List extends Component {
    componentDidMount() {
        this.subscribeEvents();
    }
    deleteToDoItem(event) {
        let id = $(event.currentTarget).closest('.task-item').data('id');
        this.props.onDelete(id);
    }

    editToDoItem(event) {
        let id = $(event.currentTarget).closest('.task-item').data('id');
        this.props.onEdit(id);
    }


    subscribeEvents() {
        $('.task-item .remove').on('click', (event) => this.deleteToDoItem(event));
        $('.task-item .edit').on('click', (event) => this.editToDoItem(event));
    }

    render() {
        let toDoList;
        if(this.props.list.length) {
            toDoList = this.props.list.map(item => {
                return (
                    <ToDoItem
                        key={item.id}
                        item={item}
                        onDelete={this.props.onDelete}
                        onEdit={this.props.onEdit}
                        />
                );
            });
        }
        return (
            <main className="list-container">
                {toDoList}
            </main>
        );
    }
}

export default List;