//i have choose fully Fully controlled component, making this component`s state the source of truth
// for any piece of data, i have a single child  component that owns parents state as the source of truth
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
//example https://codesandbox.io/s/7154w1l551
import React, {Component} from 'react';
import Title from'./InputComponents/Title';
import Description from'./InputComponents/Description';
import Tags from'./InputComponents/Tags';
import Priority from'./InputComponents/Priority';

var debugMode = false;

class AddItem extends Component {

    state = {
        shownItem: Object.assign({}, this.props.currentItem)
    };

    handleInputChange(event) {

        let change = {};
        change[event.currentTarget.name] = event.currentTarget.value;


        this.setState({
            shownItem: Object.assign(this.state.shownItem, change)
        });
    }

    restore(event) {
        event && event.preventDefault();

        this.setState({
            shownItem: Object.assign({}, this.props.currentItem)
        });
    }

    handleEditButtonClick(event) {
        event.preventDefault();

        if (this.isFormValid()) {

            this.props.onUpdateItem(this.state.shownItem);

        }
    }

    isFormValid()  {
        return this.state.shownItem.title &&  this.state.shownItem.description
    }

    render() {

        return (
            <aside className="edit-container">
                <form className="edit-form"
                      data-id={this.state.shownItem.id}>

                    <Title
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.shownItem.title}/>

                    <Description
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.shownItem.description}/>

                    <Tags
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.shownItem.tags}/>

                    <Priority
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.shownItem.priority}/>

                    <button className="edit"
                            onClick={this.handleEditButtonClick.bind(this)}>
                        edit
                    </button>

                    <button className="restore"
                            onClick={this.restore.bind(this)}>
                        restore
                    </button>
                </form>
            </aside>
        );
    }
}

export default AddItem;
