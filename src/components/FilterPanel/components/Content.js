import React, {Component} from 'react';
import WithHandler from "../../HOC/WithHandler";

class Content extends Component {
    render() {
        return (
            <div className="field-set content-filter">
                <label>Show tasks with content<br/>
                    <input type="text"
                           name="content"
                           onChange={this.props.handleChange.bind(this)}
                           value={this.props.value}/>
                </label>
            </div>
        )
    }
}

const ContentWithHandler = WithHandler(Content);

export default ContentWithHandler;