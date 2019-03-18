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







