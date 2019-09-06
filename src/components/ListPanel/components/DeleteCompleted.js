import React from 'react';

function DeleteCompleted(props) {
    return (
        <div className="delete-completed"
             hidden={(props.number === 0)}>
            <button onClick={props.onDeleteAllDone}>
                Delete {props.number} done tasks
            </button>

        </div>
    )
}

export default DeleteCompleted;
