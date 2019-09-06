import React, { Component } from 'react';
import { actions } from '../Filters.actions';
import { connect } from 'react-redux';
import { compose, lifecycle } from "recompose";
import { makeUniqueTagList } from '../Filters.util';

export class TagsList extends Component {

    handleTagsFilter(event) {
        let change = [...this.props.selectedTags];

        change.includes(event.target.innerText)
            ? change.splice(change.indexOf(event.target.innerText), 1)
            : change = change.concat([event.target.innerText]);

        actions.filterChange({ selectedTags: change });
    }

    render() {
        let tagList = this.props.tags.map(tag => {
            return (
                <li key={tag}
                    data-selected={this.props.selectedTags.includes(tag)}>
                    {tag}
                </li>
            );
        });
        return (
            <div className="field-set tags-filter">
                <span>Show tasks with tags</span>
                <ul className="tags-list"
                    data-name="tags"
                    onClick={(event) => this.handleTagsFilter(event)}>
                    {tagList}
                </ul>
            </div>
        )
    }
}

const enhance = compose(
    connect(data => ({
        selectedTags: data.filters.selectedTags,
        tags: makeUniqueTagList(data.list)
    })),
    lifecycle({
        componentDidCatch(error) {
            console.log('Oops, error!', error);
        }
    })
);

export default enhance(TagsList);