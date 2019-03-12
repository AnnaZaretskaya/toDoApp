import React, {Component} from 'react';
import WithHandler from "../../HOC/WithHandler";

class Tags extends Component {
    render() {
        return (
            <div className="field-set">
                <label htmlFor="task-tags">tags<br/>
                    <input type="text"
                           form="create-edit-form"
                           name="tags"
                           value={this.props.value}
                           onChange={this.props.handleChange.bind(this)}/>
                </label>
            </div>
        );
    }
}

const TagsWithHandler = WithHandler(Tags);

export default TagsWithHandler;