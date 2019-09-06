import React, { Component } from 'react';

export class ToDoItem extends Component {

    handleTitleClick() {
        this.props.doneToggle(this.props.item.id);
    };

    handleEditButtonClick() {
        this.props.chooseItem(this.props.item.id)
    };

    handleDeleteButtonClick() {
        if (this.props.item.id === this.props.shownItemId) {
            this.props.chooseItem();
        }

        this.props.deleteItem(this.props.item.id);
    };

    render() {

        return (
            <div className="task-item"
                 data-id={this.props.item.id}
                 data-priority={this.props.item.priority}
                 data-isdone={this.props.item.isDone}>
                <h4 className="task-title"
                    onClick={() => this.handleTitleClick()}>
                    {this.props.item.title}
                </h4>
                <p className="task-description">{this.props.item.description}</p>
                <p className="task-tags">{this.props.item.tags.join(', ')}</p>
                <button className="edit"
                      onClick={() => this.handleEditButtonClick()}>
                        Edit
                </button>
                <button className="remove"
                        onClick={() => this.handleDeleteButtonClick()}>Remove
                </button>
            </div>
        );
    }
}

export default ToDoItem;