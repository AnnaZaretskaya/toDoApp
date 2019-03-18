import {compose, setDisplayName, withHandlers, withProps} from "recompose";
import BaseTextInput from "../../sharedComponents/BaseTextInput";
import handleChange from "../../sharedComponents/commonOnChangeHandler";

const Title = compose(
    setDisplayName('Title'),
    withProps({
        componentLabel: 'title',
        formName: 'add-edit-form',
        inputName: 'title'
    }),
    withHandlers({
        onChange: props => event => handleChange(event, props)
    })
)(BaseTextInput);

export default Title;