import React from 'react';

export default function BaseCheckboxInput(props) {

    return (
        <div className="field-set">
            <label>
                <input type="checkbox"
                       name={props.inputName}
                       onChange={props.onChange}
                       checked={props.isChecked}/>
                {props.componentLabel}
            </label>
        </div>
    )
}