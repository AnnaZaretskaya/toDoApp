import React, {Component} from 'react';
import ToDoItem from'./toDoItem';

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

    render() {
        let toDoList;
        if(this.props.list.length) {
            toDoList = this.props.list.map(item => {
                return (
                    <ToDoItem
                        key={item.id}
                        item={item}
                        onDelete={this.onDelete.bind(this)}
                        onEdit={this.onEdit.bind(this)}
                        onDoneToggle={this.onDoneToggle.bind(this)}
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