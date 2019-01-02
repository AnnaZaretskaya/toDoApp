//i have choose fully Fully controlled component, making this component`s state the source of truth
// for any piece of data, i have a single child  component that owns parents state as the source of truth
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
//example https://codesandbox.io/s/7154w1l551
import React, {Component} from 'react';
import Title from'./InputComponents/Title';
import Description from'./InputComponents/Description';
import Tags from'./InputComponents/Tags';
import Priority from'./InputComponents/Priority';

var debugMode = true;
//debugMode&&console.log('i am in ,  is ', );

class AddItem extends Component {

    dummy = {
        title: '',
        description: '',
        tags: '',
        priority: 2
    };

    state = {
        shownItem: Object.assign({}, this.dummy)
    };

    handleInputChange(event) {

        let change = {};
        change[event.currentTarget.name] = event.currentTarget.value;


        this.setState({
            shownItem: Object.assign(this.state.shownItem, change)
        });
    }

    handleCreateButtonClick(event)  {
        event.preventDefault();
        if (this.isFormValid()) {
            let newItem = Object.assign({}, this.state.shownItem);
            newItem.id = Math.floor(Math.random() * 10000);

            this.props.onAddItem(newItem);

        } else {
            console.error('Title and Description are required');
        }
    }

    reset(event) {
        event.preventDefault();
        this.setState({
            shownItem: Object.assign({}, this.dummy)
        });
    }

    isFormValid()  {
        return this.state.shownItem.title &&  this.state.shownItem.description;
    }

    render() {
        return (
            <aside className="create-container">
                <form className="create-form">

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

                    <button className="create"
                            onClick={this.handleCreateButtonClick.bind(this)}>
                        create task
                    </button>

                    <button className="reset"
                            onClick={this.reset.bind(this)}>
                        reset
                    </button>
                </form>
            </aside>
        );
    }
}

export default AddItem;
