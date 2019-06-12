import handleChange from '../commonOnChangeHandler';

describe('handleChange', () => {
    it('should call onChange from passed props with proper arguments', () => {
        const event = {
            currentTarget: {
                name: 'fakeName',
                value: 'fakeValue'
            }
        };
        const props = {
            onChange: jest.fn()
        };

        handleChange(event, props);

        expect(props.onChange).toBeCalledWith({
            fakeName: 'fakeValue'
        });
    });
});