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

// function handleChange(event, props) {
//     function merge(array, value) {
//         let output = [].concat(array);
//
//         output.includes(value)
//             ? output.splice(output.indexOf(value), 1)
//             : output = output.concat([value]);
//
//         return output;
//     }
//
//
//     let change = {};
//
//     // catching 3 exceptions among 8 common cases
//     if (event.currentTarget.name === 'showUnDone') {
//         change.showUnDone = event.currentTarget.checked;
//     } else if (event.currentTarget.name === 'priorities') {
//         change.priorities = merge(props.value, event.currentTarget.value);
//     } else if (event.currentTarget.dataset.name === 'tags') {
//         change.selectedTags = merge(props.selectedTags, event.target.innerText);
//     } else {
//         change[event.currentTarget.name] = event.currentTarget.value;
//     }
//     props.onChange(change);
// }




