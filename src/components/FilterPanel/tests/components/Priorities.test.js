import React from 'react';
import renderer from 'react-test-renderer';
import Priorities, { handleChange } from "../../components/Priorities";
import { fakeEvent, fakeProps, handleChangeOutput } from '../mocks';

describe('Priorities', () => {
    let valueFake;
    let onChangeFake= jest.fn();

    const component = () => {
            return renderer.create(
                <Priorities
                    onChange={onChangeFake}
                    value={valueFake}
                />
            );
    };

    const renderComponent = () => component().toJSON();

    it('should be rendered correctly', () => {
        valueFake = ['1', '3'];

        expect(renderComponent()).toMatchSnapshot();
    });
});

describe('handleChange', () => {
    it('should add priority value from event to existed array of values from props and ' +
        'call onChange from props with updated priority object', () => {
        handleChange(fakeEvent.mock1, fakeProps.mock1);

        expect(fakeProps.mock1.onChange).toBeCalledWith(handleChangeOutput.result1);
    });

    it('should exclude value in event from array in props if it is already there', () => {
        handleChange(fakeEvent.mock2, fakeProps.mock1);

        expect(fakeProps.mock1.onChange).toBeCalledWith(handleChangeOutput.result2);
    });
});










