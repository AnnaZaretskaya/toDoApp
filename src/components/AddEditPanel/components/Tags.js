import React, {Component} from 'react';

class Tags extends Component {

    handleChange(event) {
        let change = {};
        change[event.currentTarget.name] = event.currentTarget.value;

        this.props.onChange(change);
    }

    render() {
        return (
            <div className="field-set">
                <label htmlFor="task-tags">tags<br/>
                    <input type="text"
                           form="create-edit-form"
                           name="tags"
                           value={this.props.value}
                           onChange={this.handleChange.bind(this)}/>
                </label>
            </div>
        );
    }
}

export default Tags;
