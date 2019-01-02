import React, {Component} from 'react';

class Priority extends Component  {
    render( ) {
        return (
            <div className="field-set">
                <label htmlFor="priority">priority</label><br/>
                <input type="radio"
                       form="create-edit-form"
                       name="priority"
                       value="1"
                       onChange={this.props.onChange.bind(this)}
                       defaultChecked={Number(this.props.value) === 1}/>
                <input type="radio"
                       form="create-edit-form"
                       name="priority"
                       value="2"
                       onChange={this.props.onChange.bind(this)}
                       defaultChecked={Number(this.props.value) === 2}/>
                <input type="radio"
                       form="create-edit-form"
                       name="priority"
                       value="3"
                       onChange={this.props.onChange.bind(this)}
                       defaultChecked={Number(this.props.value) === 3}/>
            </div>
        );
    }
}

export default Priority;