import React, {Component} from 'react';
import WithHandler from "../../HOC/WithHandler";

class ShowUnDoneItems extends Component {
    render() {
        return (
            <div className="field-set done-filter">
                <label>
                    <input type="checkbox"
                           name="showUnDone"
                           onChange={this.props.handleChange.bind(this)}
                           checked={this.props.isChecked}/>
                    Show unfinished tasks
                </label>
            </div>
        )
    }
}

const ShowUnDoneItemsWithHandler = WithHandler(ShowUnDoneItems);

export default ShowUnDoneItemsWithHandler;