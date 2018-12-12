import React, {Component} from 'react';
import $ from 'jquery';


class ToDoItem extends Component {

    componentDidMount() {
        this.subscribeEvents();
    }

    subscribeEvents() {

    }

    render() {

        return (
            <div className="task-item"
                 data-id={this.props.item.id}
                 data-priority={this.props.item.priority}
                 data-isdone={this.props.item.isDone}>
                <h4 className="task-title">{this.props.item.title}</h4>
                <p className="task-description">{this.props.item.description}</p>
                <p className="task-tags">{this.props.item.tags.join(', ')}</p>
                <button className="edit">Edit</button>
                <button className="remove">Remove</button>
            </div>
        );
    }
}

export default ToDoItem;

