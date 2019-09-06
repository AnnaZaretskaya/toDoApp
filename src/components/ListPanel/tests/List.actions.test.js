import { doneToggle, markAllDone, deleteItem, chooseShownItem } from '../List.actions';
import { mockActionListOutcome, fakeListMocks } from './mocks';
import { store } from '../../../storeUtils/store';

describe('List.actions', () => {
    it('should return proper outcome for doneToggle action', () => {
        expect(doneToggle(1111)).toEqual(mockActionListOutcome.result1);
    });

    it('should return proper outcome for markAllDone action', () => {
        expect(markAllDone(true)).toEqual(mockActionListOutcome.result2);
    });

    it('should return proper outcome for deleteItem action', () => {
        expect(deleteItem(9090909)).toEqual(mockActionListOutcome.result3);
    });

    it('should return proper outcome for deleteItem action', () => {
        store.getState = jest.fn(() => {
            return { list: fakeListMocks.mock1 }
        });

        expect(chooseShownItem(1000)).toEqual(mockActionListOutcome.result4);
    });
});