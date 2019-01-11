import React, {Component} from 'react';

class CompleteAllToggle extends Component {

    render() {
        return (
            <div className="field-set complete-all-toggle">
                <label>
                    <input type="checkbox"
                           onChange={this.props.onChange.bind(this)}
                           checked={this.props.isChecked}/>
                    Mark all as completed
                </label>
            </div>
        )
    }
}

export default CompleteAllToggle;