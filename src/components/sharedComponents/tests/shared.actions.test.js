import {chooseShownItem} from '../shared.actions';
import {fakeList} from './mocks';
import { store } from '../../../storeUtils/store';

describe('shared.actions', () => {

    it('should return proper outcome for chooseShownItem action', () => {

        store.getState = jest.fn(() => {
            return fakeList
        });

        expect(chooseShownItem(1000)).toEqual({
            type: 'SHOWN_ITEM_EDIT',
            name: 'shownItemChoose',
            item: {
                id: 1000,
                title: 'fakeTitle1',
                description: 'fakeDescription1',
                priority: '2',
                tags: "fakeTag1, fakeTag2, fakeTag3, fakeTag4",
                isDone: false
            }
        });
    });

    it('should return proper outcome for chooseShownItem action', () => {
        expect(chooseShownItem()).toEqual({
            type: 'SHOWN_ITEM_EDIT',
            name: 'shownItemChoose',
            item: {
                id: null,
                title: '',
                description: '',
                priority: '2',
                tags: ''
            }
        })
    });
});