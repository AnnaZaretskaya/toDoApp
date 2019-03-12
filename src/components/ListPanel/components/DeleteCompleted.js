import React, {Component} from 'react';

export default class DeleteCompleted extends Component {

    render() {
        return (
            <div className="delete-completed"
                 hidden={(this.props.number === 0)}>
                <button onClick={this.props.onDeleteAllDone}>
                    Delete {this.props.number} done tasks
                </button>

            </div>
        )
    }
}
