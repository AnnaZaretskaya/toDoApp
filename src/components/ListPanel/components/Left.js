import React from 'react';

export default function Left(props) {
    if (props.number) {
        return (
            <p className="left-items">
                You have {props.number} item{(props.number === 1) ? '' : 's'}.
            </p>
        )
    } else {
        return null;
    }
}