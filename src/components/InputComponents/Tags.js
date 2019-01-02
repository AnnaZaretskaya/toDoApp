import React, {Component} from 'react';

class Tags extends Component  {
    render( ) {
        return (
            <div className="field-set">
                <label htmlFor="task-tags">tags</label><br/>
                <input type="text"
                       form="create-edit-form"
                       name="tags"
                       defaultValue={this.props.value}
                       onChange={this.props.onChange.bind(this)}/>
            </div>
        );
    }
}

export default Tags;

