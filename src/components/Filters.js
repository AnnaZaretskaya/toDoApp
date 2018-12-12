import React, {Component} from 'react';
import $ from 'jquery';


class Filters extends Component {

    componentDidMount() {
        this.subscribeEvents();
    }

    subscribeEvents() {
        //$('.xxxxxxx').on('change', this.xxxxxxxx.bind(this));
    }

    render() {
        let tagList = this.props.tags.map(tag => {
            return (
                <li key={tag}>{tag}</li>
            );
        });

        return (
            <aside className="left-aside filters-container">

                <div className="field-set finished-tasks">
                    <input type="checkbox" id="done-checkbox"/>
                    <label htmlFor="done-checkbox">Show finished tasks</label>
                </div>

                <div className="field-set tasks-filter">
                    <label htmlFor="tasks-filter">Tasks filter description</label><br/>
                    <input type="text" id="tasks-filter-description"/>
                </div>

                <div className="field-set tasks-filter">
                    <label htmlFor="tasks-filter">Tasks filter priority</label><br/>
                    <input type="radio" name="tasks-filter-priority"/>
                    <input type="radio" name="tasks-filter-priority"/>
                    <input type="radio" name="tasks-filter-priority"/>
                </div>

                <div className="field-set tags-filter">
                    <span>
                      Tags filter
                    </span><br/>

                    <div className="tags-list">
                        <ul className="tag-item">
                            {tagList}
                        </ul>
                    </div>
                </div>

            </aside>
        );
    }
}

export default Filters;