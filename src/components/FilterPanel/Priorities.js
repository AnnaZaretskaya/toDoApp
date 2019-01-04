import React, {Component} from 'react';

class Priorities extends Component  {

    handlePrioritiesChange(event) {
        let change = [].concat(this.props.priorities);

        if (change.includes(event.target.value)) {

            change.splice(change.indexOf(event.target.value),1);
        } else {

            change = change.concat([event.target.value]);
        }

        this.props.onChange({priorities: change});
    }

    render() {
        return (
            <div className="field-set priorities-filter"
                 data-name="priorities"
                 onClick={this.handlePrioritiesChange.bind(this)}>
                <label>Tasks filter priority</label><br/>
                    <input type="checkbox" value="1"
                           checked={this.props.priorities.includes('1')}/>
                    <input type="checkbox" value="2"
                           checked={this.props.priorities.includes('2')}/>
                    <input type="checkbox" value="3"
                           checked={this.props.priorities.includes('3')}/>
            </div>
        )
    }
}

export default Priorities;
