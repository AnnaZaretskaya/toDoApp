import React from 'react';
import Left from '../../components/Left';
import renderer from 'react-test-renderer';

describe('Left', () => {

    const component = () => {
        return renderer.create(
            <Left
                number={6}
            />
        );
    };

    const renderComponent = () => component().toJSON();

    it('should be rendered correctly', () => {
        expect(renderComponent()).toMatchSnapshot();
    });
});
