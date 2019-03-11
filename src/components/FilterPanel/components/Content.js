import React, {Component} from 'react';

export default class Content extends Component {

    handleContentFilter(event) {
        this.props.onChange({ content: event.currentTarget.value });
    }

    render() {
        return (
            <div className="field-set content-filter">
                <label>Show tasks with content<br/>
                    <input type="text"
                           name="content"
                           onChange={this.handleContentFilter.bind(this)}
                           value={this.props.value}/>
                </label>
            </div>
        )
    }
}