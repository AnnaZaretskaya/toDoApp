import React from 'react';
import { actions } from '../List.actions';
import renderer from 'react-test-renderer';
import { applyFilters } from '../List.util';
import { List, mapStateToProps } from '../List';
import { fakeListMocks, fakeFiltersMock1, fakeFiltersMock2, storeState } from "./mocks";

describe('List', () => {
    let fakeList;
    let fakeFilters = {...fakeFiltersMock1};
    let instance;

    const component = () => {
        return renderer.create(
            <List
                list={fakeList}
                filters={fakeFilters}
                shownItemId={1}
            />);
    };

    const renderComponent = () => component().toJSON();

    const renderComponentInstance = () => component().getInstance();

    describe('should be rendered correctly', () => {
        it('if content is not empty', () => {
            fakeList = [...fakeListMocks.mock1];

            expect(renderComponent()).toMatchSnapshot();
        });

        it('if selectedTags is not empty', () => {
            fakeList = [];
            fakeFilters = {...fakeFiltersMock2};

            expect(renderComponent()).toMatchSnapshot();
        });
    });

    describe('areAllItemsCompleted', () => {
        it('should return false if there is not finished items in list', () => {
            fakeList = [...fakeListMocks.mock1];

            instance = renderComponentInstance();

            expect(instance.areAllItemsCompleted()).toBeFalsy();

        });

        it('should return true if all items in list are finished', () => {
            fakeList = [...fakeListMocks.mock2];

            instance = renderComponentInstance();

            expect(instance.areAllItemsCompleted()).toBeTruthy();
        });

        it('should return false if list is empty', () => {
            fakeList = [];

            instance = renderComponentInstance();

            expect(instance.areAllItemsCompleted()).toBeFalsy();
        });
    });

    describe('onDoneAllToggle', () => {
        it('should call markAllDone action with false if not all items are completed', () => {
            actions.markAllDone = jest.fn();
            instance = renderComponentInstance();
            instance.areAllItemsCompleted = jest.fn(() => {
                return true
            });

            instance.onDoneAllToggle();

            expect(actions.markAllDone).toBeCalledWith(false);
        });

        it('should call markAllDone action with true if all items are completed', () => {
            actions.markAllDone = jest.fn();
            instance = renderComponentInstance();
            instance.areAllItemsCompleted = jest.fn(() => {
                return false
            });

            instance.onDoneAllToggle();

            expect(actions.markAllDone).toBeCalledWith(true);
        });
    });

    describe('getNumberCompleted', () => {
        it('should return proper number of completed items', () => {
            fakeList = [...fakeListMocks.mock1];

            instance = renderComponentInstance();

            expect(instance.getNumberCompleted()).toEqual(1);
        });

        it('should return proper number of completed items', () => {
            fakeList = [];

            instance = renderComponentInstance();

            expect(instance.getNumberCompleted()).toEqual(0);
        });
    });

    describe('onDeleteAllDone', () => {
        it('should call deleteItem for each noncompleted item with id', () => {
            actions.deleteItem = jest.fn();
            fakeList = [...fakeListMocks.mock1];

            instance = renderComponentInstance();

            instance.onDeleteAllDone();

            expect(actions.deleteItem).toBeCalledWith(1010);
            expect(actions.deleteItem).toBeCalledTimes(1);
        });
    });

    describe('getDerivedStateFromProps', () => {
        it('should return proper object', () => {
            let props = { list: [...fakeListMocks.mock1], filters: {...fakeFiltersMock1} };

            expect(List.getDerivedStateFromProps(props)).toEqual({
                list: [{
                    id: 2000,
                    title: 'fakeTitle5',
                    description: 'fakeDescription5',
                    priority: '2',
                    tags: ['fakeTag17', 'fakeTag', 'fakeTag19', 'fakeTag20'],
                    isDone: false
                }]
            });
        });
    });
});

describe('mapStateToProps', () => {
    it('should return objects', () => {
        expect(mapStateToProps(storeState)).toEqual({
            list: ['fake', 'list',  'content'],
            filters: {
                showUnDone: true,
                content: 'fakeContent',
                priorities: ['2'],
                selectedTags: ['fakeTag']
            },
            shownItemId: null
        });
    });
});
