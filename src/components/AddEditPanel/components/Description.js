import BaseTextInput from "../../sharedComponents/BaseTextInput";
import handleChange from "../../sharedComponents/commonOnChangeHandler";
import {compose, setDisplayName, withHandlers, withProps} from "recompose";

const Description = compose(
    setDisplayName('Description'),
    withProps({
        componentLabel: 'description',
        formName: 'add-edit-form',
        inputName: 'description'
    }),
    withHandlers({
        onChange: props => event => handleChange(event, props)
    })
)(BaseTextInput);

export default Description;