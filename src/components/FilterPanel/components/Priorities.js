import React, {Component} from 'react';
import WithHandler from "../../HOC/WithHandler";

class Priorities extends Component {
    render() {
        return (
            <div className="field-set priorities-filter"
                 data-name="priorities">
                <p>Tasks filter priority<br/>
                    <label><input
                        type="checkbox"
                        value="1"
                        name="priorities"
                        onChange={this.props.handleChange.bind(this)}
                        checked={this.props.value.includes('1')}/>Low</label><br/>
                    <label><input
                        type="checkbox"
                        value="2"
                        name="priorities"
                        onChange={this.props.handleChange.bind(this)}
                        checked={this.props.value.includes('2')}/>Medium</label><br/>
                    <label><input
                        type="checkbox"
                        value="3"
                        name="priorities"
                        onChange={this.props.handleChange.bind(this)}
                        checked={this.props.value.includes('3')}/>Hight</label><br/>
                </p>
            </div>
        )
    }
}

const PrioritiesWithHandler = WithHandler(Priorities);

export default PrioritiesWithHandler;
