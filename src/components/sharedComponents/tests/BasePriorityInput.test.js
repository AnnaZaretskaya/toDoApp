import React from 'react';
import BasePriorityInput from '../BasePriorityInput';
import renderer from 'react-test-renderer';

describe('BasePriorityInput', () => {

    const component = () => {
        return renderer.create(
            <BasePriorityInput
                componentLabel={'fakeComponentLabel'}
                formName={'fakeFormName'}
                inputType={'checkbox'}
                inputName={'fakeInputName'}
                onChange={jest.fn()}
                value={['1', '3']}
            />
        );
    };

    it('should be rendered correctly', () => {
        expect(component().toJSON()).toMatchSnapshot();
    });
});