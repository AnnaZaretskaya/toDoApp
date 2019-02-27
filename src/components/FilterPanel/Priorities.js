import React, {Component} from 'react';

class Priorities extends Component {

    handlePrioritiesFilter(event) {
        let change = [].concat(this.props.priorities);

        change.includes(event.currentTarget.value)
            ? change.splice(change.indexOf(event.currentTarget.value), 1)
            : change = change.concat([event.currentTarget.value]);

        this.props.action({ priorities: change });
    }

    render() {
        return (
            <div className="field-set priorities-filter"
                 data-name="priorities">
                <label>Tasks filter priority<br/>
                    <input type="checkbox" value="1"
                           onChange={this.handlePrioritiesFilter.bind(this)}
                           checked={this.props.priorities.includes('1')}/>
                    <input type="checkbox" value="2"
                           onChange={this.handlePrioritiesFilter.bind(this)}
                           checked={this.props.priorities.includes('2')}/>
                    <input type="checkbox" value="3"
                           onChange={this.handlePrioritiesFilter.bind(this)}
                           checked={this.props.priorities.includes('3')}/>
                </label>
            </div>
        )
    }
}

export default Priorities;
