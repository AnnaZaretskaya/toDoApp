import { compose, setDisplayName, withProps } from "recompose";
import BaseCheckboxInput from "../../sharedComponents/BaseCheckboxInput";

const CompleteAllToggle = compose(
    setDisplayName('CompleteAllToggle'),
    withProps({
        componentLabel: 'Mark all as completed',
        inputName: 'doneAllToggle',
    })
)(BaseCheckboxInput);

export default CompleteAllToggle;