import BaseCheckboxInput from "../../sharedComponents/BaseCheckboxInput";
import { compose, setDisplayName, withHandlers, withProps } from "recompose";

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