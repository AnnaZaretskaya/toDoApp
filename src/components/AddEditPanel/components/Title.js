import React, {Component} from 'react';
import WithHandler from "../../HOC/WithHandler";

class Title extends Component {
    render() {
        return (
            <div className="field-set">
                <label htmlFor="task-title">title<br/>
                    <input type="text"
                           form="create-edit-form"
                           name="title"
                           value={this.props.value}
                           onChange={this.props.handleChange.bind(this)}/>
                </label>
            </div>
        )
    }
}

const TitleWithHandler = WithHandler(Title);

export default TitleWithHandler;
