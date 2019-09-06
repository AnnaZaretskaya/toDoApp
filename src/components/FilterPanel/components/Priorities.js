import { connect } from 'react-redux';
import { compose, lifecycle, setDisplayName, withHandlers, withProps } from 'recompose';
import { actions } from '../Filters.actions';
import BasePriorityInput from "../../sharedComponents/BasePriorityInput";

export const prioritiesFilterChange = (event, props) => {
    let change = [...props.value];

    change.includes(event.currentTarget.value)
        ? change.splice(change.indexOf(event.currentTarget.value), 1)
        : change = change.concat([event.currentTarget.value]);

    actions.filterChange({ priorities: change })
};

const Priorities = compose(
    connect(data => ({ value: data.filters.priorities })),
    lifecycle({
        componentDidCatch(error) {
            console.log('Oops, error!', error);
        }
    }),
    setDisplayName('Priorities'),
    withProps({
        componentLabel: 'Tasks filter priority',
        formName: 'filter-form',
        inputName: 'priorities',
        inputType: 'checkbox',
    }),
    withHandlers({
        onChange: props => event => prioritiesFilterChange(event, props)
    })
)(BasePriorityInput);

export default Priorities;