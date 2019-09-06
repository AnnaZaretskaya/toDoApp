import {connect} from 'react-redux';
import { actions } from '../Filters.actions';
import BaseCheckboxInput from "../../sharedComponents/BaseCheckboxInput";
import { compose, lifecycle, setDisplayName, withHandlers, withProps } from "recompose";

export const showUnDoneItemsFilterChange = (event) => {
    actions.filterChange({ showUnDone: event.currentTarget.checked });
};

const ShowUnDone = compose(
    connect(data => ({ showUnDone: data.filters.showUnDone })),
    lifecycle({
        componentDidCatch(error) {
            console.log('Oops, error!', error);
        }
    }),
    setDisplayName('Priorities'),
    withProps({
        componentLabel: 'Show unfinished tasks',
        inputName: 'showUnDone'
    }),
    withHandlers({
        onChange: () => event => showUnDoneItemsFilterChange(event)
    })
)(BaseCheckboxInput);

export default ShowUnDone;