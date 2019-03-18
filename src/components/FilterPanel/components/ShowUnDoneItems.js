import {compose, setDisplayName, withHandlers, withProps} from "recompose";
import BaseCheckboxInput from "../../sharedComponents/BaseCheckboxInput";

function handleChange(event, props) {
    props.onChange({ showUnDone: event.currentTarget.checked });
}

const ShowUnDoneItems = compose(
    setDisplayName('Priorities'),
    withProps({
        componentLabel: 'Show unfinished tasks',
        inputName: 'showUnDone',
    }),
    withHandlers({
        onChange: props => event => handleChange(event, props)
    })
)(BaseCheckboxInput);

export default ShowUnDoneItems;







// import React, {Component} from 'react';
// //
// // export default class ShowUnDoneItems extends Component {
// //
// //     handleShowUnDoneToggle(event) {
// //         this.props.onChange({ showUnDone: event.currentTarget.checked });
// //     };
// //
// //     render() {
// //         return (
// //             <div className="field-set done-filter">
// //                 <label>
// //                     <input form="filter-form"
// //                            type="checkbox"
// //                            name="showUnDone"
// //                            onChange={this.handleShowUnDoneToggle.bind(this)}
// //                            checked={this.props.isChecked}/>
// //                     Show unfinished tasks
// //                 </label>
// //             </div>
// //         )
// //     }
// // }