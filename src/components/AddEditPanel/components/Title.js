import React, {Component} from 'react';

class Title extends Component {

    handleChange(event) {
        let change = {};
        change[event.currentTarget.name] = event.currentTarget.value;

        this.props.onChange(change);
    }

    render() {
        return (
            <div className="field-set">
                <label htmlFor="task-title">title<br/>
                    <input type="text"
                           form="create-edit-form"
                           name="title"
                           value={this.props.value}
                           onChange={this.handleChange.bind(this)}/>
                </label>
            </div>
        )
    }
}

export default Title;
