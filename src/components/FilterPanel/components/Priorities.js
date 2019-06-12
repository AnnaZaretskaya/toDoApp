import BasePriorityInput from "../../sharedComponents/BasePriorityInput";
import { compose, setDisplayName, withHandlers, withProps } from "recompose";

export function handleChange(event, props) {
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