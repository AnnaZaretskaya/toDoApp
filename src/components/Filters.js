import React, {Component} from 'react';


class Filters extends Component {

    handleTagFilterClick() {

    }

    handleDoneFilterClick() {

    }

    handleDescriptionFilterClick() {

    }

    handlePriorityFilterClick() {

    }



    render() {
        let tagList = this.props.tags.map(tag => {
            return (
                <li key={tag}>{tag}</li>
            );
        });


        // todo to split this result to separate components
        return (
            <aside className="left-aside filters-container">

                <div className="field-set finished-tasks">
                    <input type="checkbox"
                           id="done-checkbox"
                           onChange={this.handleDoneFilterClick.bind(this)}/>
                    <label htmlFor="done-checkbox">Show finished tasks</label>
                </div>

                <div className="field-set tasks-filter">
                    <label htmlFor="tasks-filter">Tasks filter description</label><br/>
                    <input type="text"
                           id="tasks-filter-description"
                           onChange={this.handleDescriptionFilterClick.bind(this)}/>
                </div>

                <div className="field-set tasks-filter"
                    onClick={this.handlePriorityFilterClick.bind(this)}>
                    <label htmlFor="tasks-filter">Tasks filter priority</label><br/>
                    <input type="checkbox" value="1"/>
                    <input type="checkbox" value="2"/>
                    <input type="checkbox" value="3"/>
                </div>

                <div className="field-set tags-filter">
                    <span>Tags filter</span><br/>

                    <ul className="tags-list"
                        onClick={this.handleTagFilterClick.bind(this)}>
                        {tagList}
                    </ul>
                </div>

            </aside>
        );
    }
}

export default Filters;