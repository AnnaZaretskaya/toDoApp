import React, {Component} from 'react';

class ShowUnDoneItems extends Component  {

    handleShowUnDoneChange(event) {
        this.props.onChange({showUnDone: event.currentTarget.checked});
    }

    render() {
        return (
            <div className="field-set done-filter">
                <label>
                <input type="checkbox"
                       name="showUnDone"
                       onChange={this.handleShowUnDoneChange.bind(this)}
                       checked={this.props.isChecked}/>
                Show unfinished tasks
                </label>
            </div>
        )
    }
}

export default ShowUnDoneItems;
