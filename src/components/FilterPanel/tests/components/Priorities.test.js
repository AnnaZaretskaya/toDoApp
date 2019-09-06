import { actions } from "../../Filters.actions";
import { prioritiesFilterChange } from "../../components/Priorities";

describe('prioritiesFilterChange', () => {
    beforeEach(() => {
        actions.filterChange = jest.fn();
    });

    it('should add priority value from event to existed array of values from props and ' +
        'call actions.filterChange with updated priority object', () => {

        prioritiesFilterChange({ currentTarget: { value: '2' }}, {value: ['1', '3']});

        expect(actions.filterChange).toBeCalledWith({ priorities: ['1', '3', '2'] });
    });

    it('should exclude value in event from array in props if it is already there', () => {
        prioritiesFilterChange({ currentTarget: { value: '3' }}, {value: ['1', '3']});

        expect(actions.filterChange).toBeCalledWith({ priorities: ['1'] });
    });
});










