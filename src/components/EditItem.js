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

    constructor(props) {
        super(props);

        this.state = {
            shownItem: Object.assign({}, this.props.currentItem)
        };


    }

    handleInputChange(event)  {
        this.state.shownItem[event.currentTarget.name] = event.currentTarget.value;

        this.setState({shownItem: this.state.shownItem});
        debugMode&&console.log('i am in handleInputChange, ', event.currentTarget.name, ' was clicked');
        debugMode&&console.log('i am in handleInputChange, this.state.shownItem is ', this.state.shownItem);
    }

    handleResetButtonClick(event) {
        event.preventDefault();
        this.setState({
            shownItem: this.props.currentItem
        });
    }

    handleEditButtonClick(event) {
        event.preventDefault();
        if (this.isFormValid()) {
            debugMode&&console.log('i am in updateToDoItem, this.itemChanges is ', this.itemChanges);
            debugMode&&console.log('i am in updateToDoItem, this.props.currentItem is ', this.props.currentItem);

            //let updatedItem = Object.assign({},  this.props.currentItem, this.itemChanges);

            debugMode&&console.log('i am in updateToDoItem, updatedItem is ', this.state.shownItem);
            //document.getElementsByClassName('create-edit-form')[0].reset();

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
                        value={this.state.shownItem.tags.join(', ')}/>

                    <Priority
                        onChange={this.handleInputChange.bind(this)}
                        value={this.state.shownItem.priority}/>

                    <button className="edit"
                            onClick={this.handleEditButtonClick.bind(this)}>
                        {this.props.mode}
                    </button>

                    <button className="restore"
                            onClick={this.handleResetButtonClick.bind(this)}>
                        restore
                    </button>
                </form>
            </aside>
        );
    }
}

export default AddItem;
