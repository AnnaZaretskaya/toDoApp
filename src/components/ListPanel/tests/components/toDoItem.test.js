import React from 'react';
import { ToDoItem } from '../../components/toDoItem';
import renderer from 'react-test-renderer';
import { fakeItemMock } from "../mocks";

describe.only('toDoItem', () => {
    let fakeItem = Object.assign({}, fakeItemMock);
    let fakeShownItemId = 1;
    let instance;
    let fakeDoneToggle = jest.fn();
    let fakeChooseItem = jest.fn();
    let fakeDeleteItem = jest.fn();

    const component = () => {
        return renderer.create(
            <ToDoItem
                key={fakeItem.id}
                item={fakeItem}
                doneToggle={fakeDoneToggle}
                chooseItem={fakeChooseItem}
                deleteItem={fakeDeleteItem}
                shownItemId={fakeShownItemId}
            />);
    };

    const renderComponent = () => component().toJSON();

    const renderComponentInstance = () => component().getInstance();

    describe('ToDoItem', () => {
        describe('render', () => {
            it('should be rendered correctly', () => {
                expect(renderComponent()).toMatchSnapshot();
            });
        });

        describe('handleTitleClick', () => {
            it('should call doneToggle with proper id', () => {
                instance = renderComponentInstance();

                instance.handleTitleClick();

                expect(fakeDoneToggle).toBeCalledWith(1000);
            });
        });

        describe('handleEditButtonClick', () => {
            it('should call chooseItem with proper id', () => {
                instance = renderComponentInstance();

                instance.handleEditButtonClick();

                expect(fakeChooseItem).toBeCalledWith(1000);
            });
        });

        describe('handleDeleteButtonClick', () => {
            it('should call chooseItem without any parameters if item`s match with shown item id ', () => {
                fakeShownItemId = 1000;
                instance = renderComponentInstance();

                instance.handleDeleteButtonClick();

                expect(fakeChooseItem).toBeCalledWith();
            });

            it('should call chooseItem without any parameters if item`s match with shown item id ', () => {
                instance = renderComponentInstance();

                instance.handleDeleteButtonClick();

                expect(fakeDeleteItem).toBeCalledWith(1000);
            });
        });

    });
});