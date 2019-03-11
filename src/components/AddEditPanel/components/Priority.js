import React, {Component} from 'react';

class Priority extends Component {

    handleChange(event) {
        let change = {};
        change[event.currentTarget.name] = event.currentTarget.value;

        this.props.onChange(change);
    }

    render() {
        return (
            <div className="field-set">
                <p>priority</p>
                <label>
                    <input type="radio"
                           name="priority"
                           value="1"
                           onChange={this.handleChange.bind(this)}
                           checked={Number(this.props.value) === 1}/>
                    Low
                </label>
                <label>
                    <input type="radio"
                           name="priority"
                           value="2"
                           onChange={this.handleChange.bind(this)}
                           checked={Number(this.props.value) === 2}/>
                    Medium
                </label>
                <label>
                    <input type="radio"
                           name="priority"
                           value="3"
                           onChange={this.handleChange.bind(this)}
                           checked={Number(this.props.value) === 3}/>
                    Hight
                </label>
            </div>
        );
    }
}

export default Priority;