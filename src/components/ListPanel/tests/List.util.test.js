import { applyFilters } from '../List.util';
import { fakeListFiltersResult, fakeListMocks } from "./mocks";

describe('applyFilters', () => {
    let fakeList = [...fakeListMocks.mock1];
    let fakeEmptyFilter = {
        showUnDone: false,
        content: '',
        priorities: [],
        selectedTags: []
    };

    it('applyShowUnDone', () => {
        expect(applyFilters({ list: fakeList, filters: {...fakeEmptyFilter,  showUnDone: true }})).toEqual(fakeListFiltersResult.mock1);
    });

    it('applyContentFilter', () => {
        expect(applyFilters({ list: fakeList, filters: {...fakeEmptyFilter, content: 'fakeDescription5'}})).toEqual(fakeListFiltersResult.mock2);
    });

    it('applyPrioritiesFilter', () => {
        expect(applyFilters({ list: fakeList, filters: {...fakeEmptyFilter, priorities: ['2']}})).toEqual(fakeListFiltersResult.mock3);
    });

    it('applyTagsFilter', () => {
        expect(applyFilters({ list: fakeList, filters: {...fakeEmptyFilter, selectedTags: ['fakeTag']}})).toEqual(fakeListFiltersResult.mock4);
    });
});