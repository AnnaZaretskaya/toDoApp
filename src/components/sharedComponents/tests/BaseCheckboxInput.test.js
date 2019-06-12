import React from 'react';
import BaseCheckboxInput from '../BaseCheckboxInput';
import renderer from 'react-test-renderer';

describe('BaseCheckboxInput', () => {

    const component = () => {
        return renderer.create(
            <BaseCheckboxInput
                inputName={'fakeInputName'}
                onChange={jest.fn()}
                isChecked={'fakeIsChecked'}
                componentLabel={'fakeComponentLabel'}
            />
        );
    };

    it('should be rendered correctly', () => {
        expect(component().toJSON()).toMatchSnapshot();
    });
});
