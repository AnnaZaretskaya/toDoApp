import React, {Component} from 'react';

export default class ShowUnDoneItems extends Component {

    handleShowUnDoneToggle(event) {
        this.props.onChange({ showUnDone: event.currentTarget.checked });
    };

    render() {
        return (
            <div className="field-set done-filter">
                <label>
                    <input type="checkbox"
                           name="showUnDone"
                           onChange={this.handleShowUnDoneToggle.bind(this)}
                           checked={this.props.isChecked}/>
                    Show unfinished tasks
                </label>
            </div>
        )
    }
}
