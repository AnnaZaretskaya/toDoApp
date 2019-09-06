import React from 'react';
import DeleteCompleted from '../../components/DeleteCompleted';
import renderer from 'react-test-renderer';

describe('DeleteCompleted', () => {
    const component = () => {
        return renderer.create(
            <DeleteCompleted
                onDeleteAllDone={jest.fn()}
                number={5}
            />
        );
    };

    const renderComponent = () => component().toJSON();

    it('should be rendered correctly', () => {
        expect(renderComponent()).toMatchSnapshot();
    });
});