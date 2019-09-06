import { contentFilterChange } from "../../components/Content";
import { actions } from "../../Filters.actions";

describe('contentFilterChange', () => {
    it('should call actions.filterChange with arguments from event', () => {
        actions.filterChange = jest.fn();
        contentFilterChange({ currentTarget: { value: 'value' }});

        expect(actions.filterChange).toBeCalledWith({ content: 'value'  });
    });
});