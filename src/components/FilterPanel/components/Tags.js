import React, {Component} from 'react';
import WithHandler from "../../HOC/WithHandler";

// пишу для придурков: event.target - то где сработало событие
// event.currentTarget - то на чем висит обработчик собития

class Tags extends Component {

    handleTagsFilter(event) {
        let change = [].concat(this.props.selectedTags);

        change.includes(event.target.innerText)
            ? change.splice(change.indexOf(event.target.innerText), 1)
            : change = change.concat([event.target.innerText]);

        this.props.onChange({ selectedTags: change });
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
                    onClick={this.props.handleChange.bind(this)}>
                    {tagList}
                </ul>
            </div>
        )
    }
}
const TagsWithHandler = WithHandler(Tags);

export default TagsWithHandler;