import {compose, setDisplayName, withHandlers, withProps} from "recompose";
import BasePriorityInput from "../../sharedComponents/BasePriorityInput";

function handleChange(event, props) {
    let change = [].concat(props.value);

    change.includes(event.currentTarget.value)
        ? change.splice(change.indexOf(event.currentTarget.value), 1)
        : change = change.concat([event.currentTarget.value]);

    props.onChange({priorities: change});
}

const Priorities = compose(
    setDisplayName('Priorities'),
    withProps({
        componentLabel: 'Tasks filter priority',
        formName: 'filter-form',
        inputName: 'priorities',
        inputType: 'checkbox'
    }),
    withHandlers({
        onChange: props => event => handleChange(event, props)
    })
)(BasePriorityInput);

export default Priorities;








// import React, {Component} from 'react';
//
// class Priorities extends Component {
//
//     handleChange(event) {
//         let change = [].concat(this.props.value);
//
//         change.includes(event.currentTarget.value)
//             ? change.splice(change.indexOf(event.currentTarget.value), 1)
//             : change = change.concat([event.currentTarget.value]);
//
//         this.props.onChange({ priorities: change });
//     }
//
//     render() {
//         return (
//             <div className="field-set priorities-filter"
//                  data-name="priorities">
//                 <p>Tasks filter priority<br/>
//                     <label><input
//                         form="filter-form"
//                         type="checkbox"
//                         value="1"
//                         name="priorities"
//                         onChange={this.handleChange.bind(this)}
//                         checked={this.props.value.includes('1')}/>Low</label><br/>
//                     <label><input
//                         form="filter-form"
//                         type="checkbox"
//                         value="2"
//                         name="priorities"
//                         onChange={this.handleChange.bind(this)}
//                         checked={this.props.value.includes('2')}/>Medium</label><br/>
//                     <label><input
//                         form="filter-form"
//                         type="checkbox"
//                         value="3"
//                         name="priorities"
//                         onChange={this.handleChange.bind(this)}
//                         checked={this.props.value.includes('3')}/>Hight</label><br/>
//                 </p>
//             </div>
//         )
//     }
// }
//
// export default Priorities;