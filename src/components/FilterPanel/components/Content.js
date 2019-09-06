import { connect } from 'react-redux';
import { actions } from '../Filters.actions';
import BaseTextInput from "../../sharedComponents/BaseTextInput";
import { compose, lifecycle, setDisplayName, withHandlers, withProps } from 'recompose';

export const contentFilterChange = (event) => {
    actions.filterChange({ content: event.currentTarget.value })
};

const Content = compose(
    connect(data => ({ value: data.filters.content })),
    lifecycle({
        componentDidCatch(error) {
            console.log('Oops, error!', error);
        }
    }),
    setDisplayName('Content'),
    withProps({
        componentLabel: 'Show tasks with content',
        formName: 'filter-form',
        inputName: 'content',
    }),
    withHandlers({
        onChange: () => event => contentFilterChange(event)
    })
)(BaseTextInput);

export default Content;