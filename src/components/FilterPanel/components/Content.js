import BaseTextInput from "../../sharedComponents/BaseTextInput";
import handleChange from "../../sharedComponents/commonOnChangeHandler";
import {compose, setDisplayName, withHandlers, withProps} from "recompose";

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