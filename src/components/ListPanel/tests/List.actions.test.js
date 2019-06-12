import { doneToggle, markAllDone, deleteItem } from '../List.actions';
import { mockActionListOutcome } from './mocks';

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
});