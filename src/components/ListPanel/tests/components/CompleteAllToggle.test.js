import React from 'react';
import CompleteAllToggle from '../../components/CompleteAllToggle';
import renderer from 'react-test-renderer';

describe('CompleteAllToggle', () => {
    let fakeIsChecked;

    const component = () => {
        return renderer.create(
            <CompleteAllToggle
                onChange={jest.fn()}
                isChecked={fakeIsChecked}
            />);
    };

    const renderComponent = () => component().toJSON();

    it('should be rendered correctly if is toggle is on', () => {
        fakeIsChecked = true;

        expect(renderComponent()).toMatchSnapshot();
    });

    it('should be rendered correctly if is toggle is off', () => {
        fakeIsChecked = false;

        expect(renderComponent()).toMatchSnapshot();
    });
});
