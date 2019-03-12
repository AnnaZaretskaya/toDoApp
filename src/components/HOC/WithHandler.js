import React, {Component} from 'react';

function WithHandler(WrappedComponent) {

    return class Exp extends Component {
        handleChange(event) {
            function merge(array, value) {
                let output = [].concat(array);

                output.includes(value)
                    ? output.splice(output.indexOf(value), 1)
                    : output = output.concat([value]);

                return output;
            }


            let change = {};

            // catching 3 exceptions among 8 common cases
            if (event.currentTarget.name === 'showUnDone') {
                change.showUnDone = event.currentTarget.checked;
            } else if (event.currentTarget.name === 'priorities') {
                change.priorities = merge(this.props.value, event.currentTarget.value);
            } else if (event.currentTarget.dataset.name === 'tags') {
                change.selectedTags = merge(this.props.selectedTags, event.target.innerText);
            } else {
                change[event.currentTarget.name] = event.currentTarget.value;
            }
            this.props.onChange(change);
        }

        render() {
            return <WrappedComponent {...this.props} handleChange={this.handleChange}/>;
        }
    };
}

export default WithHandler;