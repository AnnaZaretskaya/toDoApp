import React, {Component} from 'react';


class ToDoItem extends Component {

    handleTitleClick() {
        // mark as done
    }

    handleEditButtonClick() {
        this.props.onEdit(this.props.item.id);
    }

    handleDeleteButtonClick() {
       this.props.onDelete(this.props.item.id);
    }

    render() {

        return (
            <div className="task-item"
                 data-id={this.props.item.id}
                 data-priority={this.props.item.priority}
                 data-isdone={this.props.item.isDone}>
                <h4 className="task-title"
                    onClick={this.handleTitleClick.bind(this)}>
                    {this.props.item.title}
                </h4>
                <p className="task-description">{this.props.item.description}</p>
                <p className="task-tags">{this.props.item.tags.join(', ')}</p>
                <button className="edit"
                        onClick={this.handleEditButtonClick.bind(this)}>Edit</button>
                <button className="remove"
                        onClick={this.handleDeleteButtonClick.bind(this)}>Remove</button>
            </div>
        );
    }
}

export default ToDoItem;

