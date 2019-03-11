import React, {Component} from 'react';

export default class Left extends Component {
    render() {
        if (this.props.number) {
            return (
                <p className="left-items">
                    You have {this.props.number} item{(this.props.number === 1) ? '' : 's'}.
                </p>
            )
        } else {
            return null;
        }
    }
}