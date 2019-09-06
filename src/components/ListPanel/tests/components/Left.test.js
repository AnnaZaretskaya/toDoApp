import React from 'react';
import Left from '../../components/Left';
import renderer from 'react-test-renderer';

describe('Left', () => {
    let number;

    const component = () => {
        return renderer.create(
            <Left
                number={number}
            />
        );
    };

    const renderComponent = () => component().toJSON();

    it('should be rendered correctly', () => {
        number = 6;

        expect(renderComponent()).toMatchSnapshot();
    });

    it('should be rendered correctly', () => {
        number = undefined;

        expect(renderComponent()).toMatchSnapshot();
    });
});