import React, {Component} from 'react';

class Priorities extends Component {

    handlePrioritiesFilter(event) {
        let change = [].concat(this.props.value);

        change.includes(event.currentTarget.value)
            ? change.splice(change.indexOf(event.currentTarget.value), 1)
            : change = change.concat([event.currentTarget.value]);

        this.props.onChange({ priorities: change });
    }

    render() {
        return (
            <div className="field-set priorities-filter"
                 data-name="priorities">
                <p>Tasks filter priority<br/>
                    <label><input type="checkbox" value="1"
                           onChange={this.handlePrioritiesFilter.bind(this)}
                           checked={this.props.value.includes('1')}/>Low</label><br/>
                    <label><input type="checkbox" value="2"
                           onChange={this.handlePrioritiesFilter.bind(this)}
                           checked={this.props.value.includes('2')}/>Medium</label><br/>
                    <label><input type="checkbox" value="3"
                           onChange={this.handlePrioritiesFilter.bind(this)}
                           checked={this.props.value.includes('3')}/>Hight</label><br/>
                </p>
            </div>
        )
    }
}

export default Priorities;
