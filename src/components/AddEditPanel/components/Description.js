import React, {Component} from 'react';

class Description extends Component {

    handleChange(event) {
        let change = {};
        change[event.currentTarget.name] = event.currentTarget.value;

        this.props.onChange(change);
    }

    render() {
        return (
            <div className="field-set">
                <label htmlFor="task-description">description<br/>
                    <textarea form="create-edit-form"
                              name="description"
                              onChange={this.handleChange.bind(this)}
                              value={this.props.value}/>
                </label>
            </div>
        )
    }
}

export default Description;
