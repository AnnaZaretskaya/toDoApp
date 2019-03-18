import React, {Component} from 'react';

export default class BaseCheckboxInput extends Component {
    render() {
        return (
            <div className="field-set">
                <label>
                    <input type="checkbox"
                           name={this.props.inputName}
                           onChange={this.props.onChange}
                           checked={this.props.isChecked}/>
                    {this.props.componentLabel}
                </label>
            </div>
        )
    }
}