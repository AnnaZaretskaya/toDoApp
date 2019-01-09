import React, {Component} from 'react';

class Title extends Component {
    render() {
        return (
            <div className="field-set">
                <label htmlFor="task-title">title<br/>
                    <input type="text"
                       form="create-edit-form"
                       name="title"
                       value={this.props.value}
                       onChange={this.props.onChange.bind(this)}/>
                </label>
            </div>
        )
    }
}

export default Title;
