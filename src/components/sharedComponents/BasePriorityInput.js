import React from 'react';

export default function BasePriorityInput(props) {

    return (
        <div className="field-set">
            <p>{props.componentLabel}<br/>
                <label><input
                    form={props.formName}
                    type={props.inputType}
                    value="1"
                    name={props.inputName}
                    onChange={props.onChange}
                    checked={props.value.includes('1')}/>Low</label><br/>
                <label><input
                    form={props.formName}
                    type={props.inputType}
                    value="2"
                    name={props.inputName}
                    onChange={props.onChange}
                    checked={props.value.includes('2')}/>Medium</label><br/>
                <label><input
                    form={props.formName}
                    type={props.inputType}
                    value="3"
                    name={props.inputName}
                    onChange={props.onChange}
                    checked={props.value.includes('3')}/>Hight</label><br/>
            </p>
        </div>
    )
}