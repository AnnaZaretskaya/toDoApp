import { applyFilter } from '../Filters.actions';
import { mockActionFilterIncome, mockActionAddEditPanelOutcome } from './mocks';

describe('Filters.actions', () => {
    it('should return proper outcome for applyFilter action', () => {
        expect(applyFilter(mockActionFilterIncome.fakeChange)).toEqual(mockActionAddEditPanelOutcome.result1);
    });
});