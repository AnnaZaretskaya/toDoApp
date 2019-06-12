import React from 'react';
import Content from '../../components/Content';
import renderer from 'react-test-renderer';


describe('Content', () => {
    let valueFake;
    let onChangeFake= jest.fn();

    const component = () => {
            return renderer.create(
                <Content
                    onChange={onChangeFake}
                    value={valueFake}
                />
            );
        };

    const renderComponent = () => component().toJSON();

    it('should be rendered correctly', () => {
        valueFake = 'fakeValue';

        expect(renderComponent()).toMatchSnapshot();
    });
});