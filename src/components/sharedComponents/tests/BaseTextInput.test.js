import React from 'react';
import BaseTextInput from '../BaseTextInput';
import renderer from 'react-test-renderer';

describe('BaseTextInput', () => {

    const component = () => {
        return renderer.create(
            <BaseTextInput
                componentLabel={'fakeComponentLabel'}
                formName={'fakeFormName'}
                inputName={'fakeInputName'}
                onChange={jest.fn()}
                value={'fakeValue'}
            />
        );
    };

    it('should be rendered correctly', () => {
        expect(component().toJSON()).toMatchSnapshot();
    });
});