import React from 'react';
import Tags from '../../components/Tags';
import renderer from 'react-test-renderer';

describe('Tags', () => {
    const onFakeChange = jest.fn();
    const fakeEvent = { target: { innerText: 'fakeTag1' } };
    let fakeTags;
    let fakeSelectedTags;

    const component = () => {
        return renderer.create(
            <Tags
                onChange={onFakeChange}
                tags={fakeTags}
                selectedTags={fakeSelectedTags}
            />);
    };

    const renderComponent = () => component().toJSON();

    const renderComponentInstance = () => component().getInstance();

    describe('should be rendered correctly', () => {
        it('should be rendered correctly', () => {
            fakeTags = [];
            fakeSelectedTags = [];

            expect(renderComponent()).toMatchSnapshot();
        });

        it('should be rendered correctly', () => {
            fakeTags = ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'];
            fakeSelectedTags = ['fakeTag2', 'fakeTag3'];

            expect(renderComponent()).toMatchSnapshot();
        });

        it('should be rendered correctly', () => {
            fakeTags = ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'];
            fakeSelectedTags = [];

            expect(renderComponent()).toMatchSnapshot();
        });
    });

    describe('handleTagsFilter', () => {
        it('should exclude tag if it is already there', () => {
            fakeTags = ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'];
            fakeSelectedTags = ['fakeTag1', 'fakeTag2'];

            renderComponentInstance().handleTagsFilter(fakeEvent);

            expect(onFakeChange).toBeCalledWith({ selectedTags: ['fakeTag2'] });
        });

        it('should concat choosen tag', () => {
            fakeTags = ['fakeTag2', 'fakeTag3', 'fakeTag4'];
            fakeSelectedTags = ['fakeTag4'];

            renderComponentInstance().handleTagsFilter(fakeEvent);

            expect(onFakeChange).toBeCalledWith({ selectedTags: ['fakeTag4', 'fakeTag1']});
        });
    });
});

