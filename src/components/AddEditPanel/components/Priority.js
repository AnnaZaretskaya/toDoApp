import React, {Component} from 'react';
import WithHandler from "../../HOC/WithHandler";

class Priority extends Component {
    render() {
        return (
            <div className="field-set">
                <p>priority</p>
                <label>
                    <input type="radio"
                           name="priority"
                           value="1"
                           onChange={this.props.handleChange.bind(this)}
                           checked={Number(this.props.value) === 1}/>
                    Low
                </label>
                <label>
                    <input type="radio"
                           name="priority"
                           value="2"
                           onChange={this.props.handleChange.bind(this)}
                           checked={Number(this.props.value) === 2}/>
                    Medium
                </label>
                <label>
                    <input type="radio"
                           name="priority"
                           value="3"
                           onChange={this.props.handleChange.bind(this)}
                           checked={Number(this.props.value) === 3}/>
                    Hight
                </label>
            </div>
        );
    }
}

const PriorityWithHandler = WithHandler(Priority);

export default PriorityWithHandler;