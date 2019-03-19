import handleChange from "../../sharedComponents/commonOnChangeHandler";
import BasePriorityInput from "../../sharedComponents/BasePriorityInput";
import {compose, setDisplayName, withHandlers, withProps} from "recompose";

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