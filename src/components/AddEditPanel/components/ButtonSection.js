import React, {Component} from 'react';

class ButtonSection extends Component {
    render() {
        if (this.props.isCreateMode) {
            return (
                <div className="create-buttons buttons-control">
                    <button className="create"
                            hidden={!this.props.isValid}
                            onClick={this.props.onCreate.bind(this)}>
                        create new task
                    </button>
                    <button className="reset"
                            hidden={this.props.areAllFieldsEmpty}
                            onClick={this.props.onReset.bind(this)}>
                        reset
                    </button>
                </div>
            )
        } else {
            return (
                <div className="edit-buttons buttons-control">
                    <button className="edit"
                            hidden={!this.props.isValid || (this.props.isValid && !this.props.wasChanged)}
                            onClick={this.props.onEdit.bind(this)}>
                        edit
                    </button>

                    <button className="restore"
                            hidden={!this.props.wasChanged}
                            onClick={this.props.onRestore.bind(this)}>
                        restore
                    </button>

                    <button className="cancel"
                            onClick={this.props.onReset.bind(this)}>
                        cancel
                    </button>
                </div>
            )
        }
    }
}

export default ButtonSection;