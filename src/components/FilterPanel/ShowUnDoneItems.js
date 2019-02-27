import React, {Component} from 'react';

class ShowUnDoneItems extends Component {

    handleShowUnDoneToggle(event) {
        this.props.action({ showUnDone: event.currentTarget.checked });
    };

    render() {
        return (
            <div className="field-set done-filter">
                <label>
                    <input type="checkbox"
                           name="showUnDone"
                           onChange={this.handleShowUnDoneToggle.bind(this)}
                           checked={this.props.showUnDone}/>
                    Show unfinished tasks
                </label>
            </div>
        )
    }
}

export default ShowUnDoneItems;
