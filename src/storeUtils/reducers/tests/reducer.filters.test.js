import { filters } from '../reducer.filters'
import { fakeFilter, fakeFiltersActions, reducerFiltersOutcome } from './mocks'

describe('reducer.filters', () => {
    it('should return the initial state {}', () => {
        expect(filters()).toEqual({});
    });

    it('should return changed item', () => {
        expect(filters(fakeFilter, { type: null })).toEqual(fakeFilter);
    });

    it('should return changed item', () => {
        expect(filters(fakeFilter, fakeFiltersActions)).toEqual(reducerFiltersOutcome);
    });
});