import React from 'react';

export default function BaseTextInput(props) {

    return (
        <div className="field-set">
            <label>{props.componentLabel}<br/>
                <input type="text"
                       form={props.formName}
                       name={props.inputName}
                       value={props.value}
                       onChange={props.onChange}/>
            </label>
        </div>
    )
}