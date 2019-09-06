import { makeUniqueTagList } from '../Filters.util';
import { storeList, tagList } from './mocks';

describe('Filters.makeUniqueTagList', () => {
    it('should return unique tag list', () => {
        expect(makeUniqueTagList(storeList)).toEqual(tagList);
    });
});