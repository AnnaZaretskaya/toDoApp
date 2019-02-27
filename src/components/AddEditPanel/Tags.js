import React, {Component} from 'react';

class Tags extends Component {
    render() {
        return (
            <div className="field-set">
                <label htmlFor="task-tags">tags<br/>
                    <input type="text"
                           form="create-edit-form"
                           name="tags"
                           value={this.props.value || ''}
                           onChange={this.props.onChange.bind(this)}/>
                </label>
            </div>
        );
    }
}

export default Tags;
