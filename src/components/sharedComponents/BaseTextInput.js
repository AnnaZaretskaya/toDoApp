import React, {Component} from 'react';

export default class BaseTextInput extends Component {
    render() {
        return (
            <div className="field-set">
                <label>{this.props.componentLabel}<br/>
                    <input type="text"
                           form={this.props.formName}
                           name={this.props.inputName}
                           value={this.props.value}
                           onChange={this.props.onChange}/>
                </label>
            </div>
        )
    }
}