import React, {Component} from 'react';

class Left extends Component {
    render() {
        // if(this.props.number === 1) {
        //     return (
        //         <p className="left-items">
        //             You have 1 item.
        //         </p>
        //     )
        // } else
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

export default Left;
