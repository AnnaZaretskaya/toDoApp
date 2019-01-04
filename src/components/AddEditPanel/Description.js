import React, {Component} from 'react';

class Description extends Component  {
    render() {
        return (
            <div className="field-set">
                <label htmlFor="task-description">description</label><br/>
                <textarea form="create-edit-form"
                          name="description"
                          onChange={this.props.onChange.bind(this)}
                          value={this.props.value}/>
            </div>
        )
    }
}

export default Description;