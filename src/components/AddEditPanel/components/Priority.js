import {compose, setDisplayName, withHandlers, withProps} from "recompose";
import BasePriorityInput from "../../sharedComponents/BasePriorityInput";
import handleChange from "../../sharedComponents/commonOnChangeHandler";

const Priority = compose(
    setDisplayName('Priority'),
    withProps({
        componentLabel: 'priority',
        formName: 'add-edit-form',
        inputName: 'priority',
        inputType: 'radio'
    }),
    withHandlers({
        onChange: props => event => handleChange(event, props)
    })
)(BasePriorityInput);

export default Priority;


// import React, {Component} from 'react';
//
// class Priority extends Component {
//
//     handleChange(event) {
//
//         this.props.onChange({priority: event.currentTarget.value});
//     }
//
//     render() {
//         return (
//             <div className="field-set">
//                 <p>priority</p>
//                 <label>
//                     <input form="add-edit-form"
//                            type="radio"
//                            name="priority"
//                            value="1"
//                            onChange={this.handleChange.bind(this)}
//                            checked={Number(this.props.value) === 1}/>
//                     Low
//                 </label>
//                 <label>
//                     <input form="add-edit-form"
//                            type="radio"
//                            name="priority"
//                            value="2"
//                            onChange={this.handleChange.bind(this)}
//                            checked={Number(this.props.value) === 2}/>
//                     Medium
//                 </label>
//                 <label>
//                     <input form="add-edit-form"
//                            type="radio"
//                            name="priority"
//                            value="3"
//                            onChange={this.handleChange.bind(this)}
//                            checked={Number(this.props.value) === 3}/>
//                     Hight
//                 </label>
//             </div>
//         );
//     }
// }
//
// export default Priority;