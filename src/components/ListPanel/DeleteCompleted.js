import React, {Component} from 'react';

class DeleteCompleted extends Component {

    render() {
        return (
            <div className="delete-completed"
                 hidden={(this.props.number === 0)}>
                <button onClick={this.props.onDeleteAllCompleted.bind(this)}>
                    Delete all {this.props.number} done tasks
                </button>

            </div>
        )
    }
}

export default DeleteCompleted;
