import React from 'react';
import renderer from 'react-test-renderer';
import ShowUnDoneItems, { handleChange } from "../../components/ShowUnDoneItems";
import {fakeEvent, fakeProps, handleChangeOutput} from "../mocks";

describe('ShowUnDoneItems', () => {
    let valueFake;
    let onChangeFake= jest.fn();

    const component = () => {
        return renderer.create(
            <ShowUnDoneItems
                onChange={onChangeFake}
                value={valueFake}
            />
        );
    };

    const renderComponent = () => component().toJSON();

    it('should be rendered correctly', () => {
        valueFake = true;

        expect(renderComponent()).toMatchSnapshot();
    });

    it('should be rendered correctly', () => {
        valueFake = false;

        expect(renderComponent()).toMatchSnapshot();
    });
});

describe('handleChange', () => {
    it('should set showUnDone-filter to true', () => {
        handleChange(fakeEvent.mock3, fakeProps.mock2);

        expect(fakeProps.mock2.onChange).toBeCalledWith(handleChangeOutput.result3);
    });
});