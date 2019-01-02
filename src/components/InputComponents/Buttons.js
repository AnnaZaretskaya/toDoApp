import React, {Component} from 'react';

class Buttons extends Component  {
    render( ) {
        return (
            <div className="field-set">
                <button className={this.props.mode}
                        onClick={this.props.onSubmitClick.bind(this)}>
                        {this.props.mode}
                </button>

                <button hidden={this.props.mode === 'create'}
                        className="reset"
                        onClick={this.props.onResetClick.bind(this)}>
                        reset
                </button>
            </div>
        );
    }
}

export default Buttons;
