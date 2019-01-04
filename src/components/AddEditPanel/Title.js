import React, {Component} from 'react';

class Title extends Component {
    render() {
        return (
            <div className="field-set">
                <label htmlFor="task-title">title</label><br/>
                <input type="text"
                       form="create-edit-form"
                       name="title"
                       value={this.props.value}
                       onChange={this.props.onChange.bind(this)}/>
            </div>
        )
    }
}

export default Title;
