import {compose, setDisplayName, withHandlers, withProps} from "recompose";
import BaseTextInput from "../../sharedComponents/BaseTextInput";
import handleChange from "../../sharedComponents/commonOnChangeHandler";

const Content = compose(
    setDisplayName('Content'),
    withProps({
        componentLabel: 'Show tasks with content',
        formName: 'filter-form',
        inputName: 'content'
    }),
    withHandlers({
        onChange: props => event => handleChange(event, props)
    })
)(BaseTextInput);

export default Content;