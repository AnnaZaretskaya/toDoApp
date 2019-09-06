import React from 'react';
import renderer from 'react-test-renderer';
import { TagsList } from '../../components/TagsList';
import { actions } from "../../Filters.actions";

describe('TagsContainer', () => {
    let fakeTags;
    let fakeSelectedTags;

    const component = () => {
        return renderer.create(
            <TagsList
                tags={fakeTags}
                selectedTags={fakeSelectedTags}
            />);
    };

    const renderComponent = () => component().toJSON();

    const renderComponentInstance = () => component().getInstance();

    describe('should be rendered correctly', () => {
        it('should be rendered correctly with empty tags', () => {
            fakeTags = [];
            fakeSelectedTags = [];

            expect(renderComponent()).toMatchSnapshot();
        });

        it('should be rendered correctly with filed tags', () => {
            fakeTags = ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'];
            fakeSelectedTags = ['fakeTag2', 'fakeTag3'];

            expect(renderComponent()).toMatchSnapshot();
        });

        it('should be rendered correctly with filed tags and empty selected tags', () => {
            fakeTags = ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'];
            fakeSelectedTags = [];

            expect(renderComponent()).toMatchSnapshot();
        });
    });

    describe('handleTagsFilter', () => {
        it('should exclude tag if it is already there', () => {
            fakeTags = ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'];
            fakeSelectedTags = ['fakeTag1', 'fakeTag2'];
            actions.filterChange = jest.fn();

            renderComponentInstance().handleTagsFilter({ target: { innerText: 'fakeTag1' } });

            expect(actions.filterChange).toBeCalledWith({ selectedTags: ['fakeTag2'] });
        });

        it('should concat choosen tag', () => {
            fakeTags = ['fakeTag2', 'fakeTag3', 'fakeTag4'];
            fakeSelectedTags = ['fakeTag4'];
            actions.filterChange = jest.fn();

            renderComponentInstance().handleTagsFilter({ target: { innerText: 'fakeTag1' } });

            expect(actions.filterChange).toBeCalledWith({ selectedTags: ['fakeTag4', 'fakeTag1']});
        });
    });
});

