import {compose, setDisplayName, withHandlers, withProps} from "recompose";
import BaseTextInput from "../../sharedComponents/BaseTextInput";
import handleChange from "../../sharedComponents/commonOnChangeHandler";

const Tags = compose(
    setDisplayName('Tags'),
    withProps({
        componentLabel: 'tags',
        formName: 'add-edit-form',
        inputName: 'tags'
    }),
    withHandlers({
        onChange: props => event => handleChange(event, props)
    })
)(BaseTextInput);

export default Tags;