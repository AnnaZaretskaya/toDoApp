import React, {Component} from 'react';
import ToDoItem from'./toDoItem';

class List extends Component {
    onDelete(id) {
        this.props.onDelete(id);
    }

    onEdit(id) {
        this.props.onEdit(id);
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