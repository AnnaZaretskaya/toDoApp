import React, {Component} from 'react';
import WithHandler from '../../HOC/WithHandler';

class Description extends Component {

    render() {
        return (
            <div className="field-set">
                <label htmlFor="task-description">description<br/>
                    <textarea form="create-edit-form"
                              name="description"
                              onChange={this.props.handleChange.bind(this)}
                              value={this.props.value}/>
                </label>
            </div>
        )
    }
}

const DescriptionWithHandler = WithHandler(Description);

export default DescriptionWithHandler;
