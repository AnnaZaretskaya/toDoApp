import { filterChange } from '../Filters.actions';

describe('Filters.actions', () => {
    it('should return proper outcome for applyFilter action', () => {
        expect(filterChange('fakeChange')).toEqual({
            type: 'FILTER',
            change: 'fakeChange'
        });
    });
});