import {compose, setDisplayName, withProps} from "recompose";
import BaseCheckboxInput from "../../sharedComponents/BaseCheckboxInput";

const CompleteAllToggle = compose(
    setDisplayName('CompleteAllToggle'),
    withProps({
        componentLabel: 'Mark all as completed',
        inputName: 'doneAllToggle',
    })
)(BaseCheckboxInput);

export default CompleteAllToggle;















// import React, { Component } from 'react';
//
// export default class CompleteAllToggle extends Component {
//     render() {
//         return (
//             <div className="field-set complete-all-toggle">
//                 <label>
//                     <input type="checkbox"
//                            onChange={this.props.onChange.bind(this)}
//                            checked={this.props.isChecked}/>
//                     Mark all as completed
//                 </label>
//             </div>
//         )
//     }
// }
