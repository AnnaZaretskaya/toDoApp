import { list } from '../reducers/reducer.list'
import { fakeList, fakeListActions, reducerListOutcome } from './mocks'

describe('reducer.list', () => {

    it('should return the initial state []', () => {
        expect(list()).toEqual([]);
    });

    it('should return the initial state []', () => {
        expect(list(undefined, {type: null})).toEqual([]);
    });

    it('should return initial list if action hasnt item', () => {
        expect(list(fakeList, fakeListActions.mock1)).toEqual(reducerListOutcome.result1);
    });

    it('should return list with updated item for updating action', () => {
        expect(list(fakeList, fakeListActions.mock2)).toEqual(reducerListOutcome.result2);
    });

    it('should return list without item with id from action', () => {
        expect(list(fakeList, fakeListActions.mock3)).toEqual(reducerListOutcome.result3);
    });

    it('should return list with new item passed from action', () => {
        expect(list(fakeList, fakeListActions.mock4)).toEqual(reducerListOutcome.result4);
    });

    it('should return list with toogled item with id from action', () => {
        expect(list(fakeList, fakeListActions.mock5)).toEqual(reducerListOutcome.result5);
    });

    it('should return list with all items with done status', () => {
        expect(list(fakeList, fakeListActions.mock6)).toEqual(reducerListOutcome.result6);
    });

    it('should return list with all items with not done status', () => {
        expect(list(fakeList, fakeListActions.mock7)).toEqual(reducerListOutcome.result7);
    });
});