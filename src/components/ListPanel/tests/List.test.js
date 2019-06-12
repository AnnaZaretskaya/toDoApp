import React from 'react';
import { List, mapStateToProps, actions } from '../List';
import renderer from 'react-test-renderer';
import { fakeListMocks, fakeFiltersMock1, fakeFiltersMock2, fakeListFiltersResult, storeState } from "./mocks";

describe('List', () => {
    let fakeList;
    let fakeFilters = Object.assign({}, fakeFiltersMock1);
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
            fakeList = [].concat(fakeListMocks.mock1);

            expect(renderComponent()).toMatchSnapshot();
        });

        it('if selectedTags is not empty', () => {
            fakeList = [];
            fakeFilters = Object.assign({}, fakeFiltersMock2);

            expect(renderComponent()).toMatchSnapshot();
        });
    });

    describe('applyFilters', () => {
        it('should call filters in definite order', () => {
            let callStack = [];
            fakeList = [].concat(fakeListMocks.mock1);

            instance = renderComponentInstance();

            instance.filtersContainer = {
                applyShowUnDone: jest.fn(() => {
                    callStack.push(1)
                }),
                applyContentFilter: jest.fn(() => {
                    callStack.push(2)
                }),
                applyPrioritiesFilter: jest.fn(() => {
                    callStack.push(3)
                }),
                applyTagsFilter: jest.fn(() => {
                    callStack.push(4)
                })
            };

            instance.applyFilters();

            expect(callStack).toEqual([1, 2, 3, 4]);

        });
    });

    describe('filtersContainer', () => {
        beforeAll(() => {
            instance = renderComponentInstance();
        });

        it('applyShowUnDone', () => {
            expect(instance.filtersContainer.applyShowUnDone(fakeList, {showUnDone: true})).toEqual(fakeListFiltersResult.mock1);
        });

        it('applyContentFilter', () => {
            expect(instance.filtersContainer.applyContentFilter(fakeList, {content: 'fakeDescription5'})).toEqual(fakeListFiltersResult.mock2);
        });

        it('applyPrioritiesFilter', () => {
            expect(instance.filtersContainer.applyPrioritiesFilter(fakeList, {priorities: ['2']})).toEqual(fakeListFiltersResult.mock3);
        });

        it('applyTagsFilter', () => {
            expect(instance.filtersContainer.applyTagsFilter(fakeList, {selectedTags: ['fakeTag']})).toEqual(fakeListFiltersResult.mock4);
        });
    });

    describe('areAllItemsCompleted', () => {
        it('should return false if there is not finished items in list', () => {
            fakeList = [].concat(fakeListMocks.mock1);

            instance = renderComponentInstance();

            expect(instance.areAllItemsCompleted()).toBeFalsy();

        });

        it('should return true if all items in list are finished', () => {
            fakeList = [].concat(fakeListMocks.mock2);

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
            fakeList = [].concat(fakeListMocks.mock1);

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
            fakeList = [].concat(fakeListMocks.mock1);

            instance = renderComponentInstance();

            instance.onDeleteAllDone();

            expect(actions.deleteItem).toBeCalledWith(1010);
            expect(actions.deleteItem).toBeCalledTimes(1);
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
