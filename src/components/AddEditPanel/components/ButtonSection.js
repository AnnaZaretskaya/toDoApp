import React from 'react';

export default function ButtonSection(props) {
    if (props.isCreateMode) {
        return (
            <div className="create-buttons buttons-control">
                <button className="create"
                        hidden={!props.isValid}
                        onClick={(event) => props.onCreate(event)}>
                    create new task
                </button>
                <button className="reset"
                        hidden={props.areAllFieldsEmpty}
                        onClick={(event) => props.onReset(event)}>
                    reset
                </button>
            </div>
        )
    } else {
        return (
            <div className="edit-buttons buttons-control">
                <button className="edit"
                        hidden={!props.isValid || (props.isValid && !props.wasChanged)}
                        onClick={(event) => props.onEdit(event)}>
                    edit
                </button>

                <button className="restore"
                        hidden={!props.wasChanged}
                        onClick={(event) => props.onRestore(event)}>
                    restore
                </button>

                <button className="cancel"
                        onClick={(event) => props.onReset(event)}>
                    cancel
                </button>
            </div>
        )
    }
}