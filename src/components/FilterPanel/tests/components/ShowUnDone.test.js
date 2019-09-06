import { showUnDoneItemsFilterChange } from "../../components/ShowUnDone";
import { actions } from "../../Filters.actions";

describe('contentFilterChange', () => {
    it('should call actions.filterChange with arguments from event', () => {
        actions.filterChange = jest.fn();
        showUnDoneItemsFilterChange({ currentTarget: { checked: true }});

        expect(actions.filterChange).toBeCalledWith({ showUnDone: true });
    });
});