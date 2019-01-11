import React, {Component} from 'react';

class Content extends Component {

    handleContentChange(event) {
        this.props.onChange({content: event.currentTarget.value});
    }

    render() {
        return (
            <div className="field-set content-filter">
                <label>Show tasks with content<br/>
                    <input type="text"
                           name="content"
                           onChange={this.handleContentChange.bind(this)}
                           value={this.props.content}/>
                </label>
            </div>
        )
    }
}

export default Content;
