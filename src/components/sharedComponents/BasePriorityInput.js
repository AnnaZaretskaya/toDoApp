import React, {Component} from 'react';

export default class BasePriorityInput extends Component {
    render() {
        return (
            <div className="field-set">
                <p>{this.props.componentLabel}<br/>
                    <label><input
                        form={this.props.formName}
                        type={this.props.inputType}
                        value="1"
                        name={this.props.inputName}
                        onChange={this.props.onChange}
                        checked={this.props.value.includes('1')}/>Low</label><br/>
                    <label><input
                        form={this.props.formName}
                        type={this.props.inputType}
                        value="2"
                        name={this.props.inputName}
                        onChange={this.props.onChange}
                        checked={this.props.value.includes('2')}/>Medium</label><br/>
                    <label><input
                        form={this.props.formName}
                        type={this.props.inputType}
                        value="3"
                        name={this.props.inputName}
                        onChange={this.props.onChange}
                        checked={this.props.value.includes('3')}/>Hight</label><br/>
                </p>
            </div>
        )
    }
}