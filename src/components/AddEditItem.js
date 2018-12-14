import React, {Component} from 'react';
var debugMode = false;

class AddEditItem extends Component {

    componentDidMount() {

        this.itemChanges = {};

        debugMode&&console.log('i am in componentDidMount AddEditItem, this.itemChanges is', this.itemChanges);
    }

     componentWillUpdate() {
         this.itemChanges = {};

         debugMode&&console.log('i am in componentWillUpdate AddEditItem, this.itemChanges is', this.itemChanges);
     }

    handleInputChange(event) {
        this.itemChanges[event.currentTarget.name] =
            event.currentTarget.name === 'tags' ?
                event.currentTarget.value.split(', ') :
                event.currentTarget.value;
        debugMode&&console.log('i am in handleInputChange, ', event.currentTarget.name, ' was clicked');
        debugMode&&console.log('i am in handleInputChange, this.itemChanges is ', this.itemChanges);
    }

    handleButtonClick(event) {
        event.preventDefault();
        this.props.currentItem.id ?
            this.updateToDoItem() :
            this.createToDoItem();
        debugMode&&console.log('i am in handleButtonClick, it calls', this.props.currentItem.id ?
            'this.updateToDoItem()' :
            'this.createToDoItem()');
    }

    createToDoItem() {
        if (this.isFormValid()) {
            let newItem = Object.assign({
                id : Math.floor(Math.random() * 10000),
                title: '',
                description: '',
                tags: [],
                priority: 2,
            }, this.itemChanges);

            debugMode&&console.log('i am in createToDoItem, newItem is ', newItem);
            document.getElementsByClassName('create-edit-form')[0].reset();
            this.props.onAddItem(newItem);
        } else {
            console.error('Title and Description are required');
        }
    }

    updateToDoItem() {
        if (this.isFormValid()) {
            debugMode&&console.log('i am in updateToDoItem, this.itemChanges is ', this.itemChanges);
            debugMode&&console.log('i am in updateToDoItem, this.props.currentItem is ', this.props.currentItem);

            let updatedItem = Object.assign({},  this.props.currentItem, this.itemChanges);

            debugMode&&console.log('i am in updateToDoItem, updatedItem is ', updatedItem);
            //document.getElementsByClassName('create-edit-form')[0].reset();
            this.props.onUpdateItem(updatedItem);


        }
    }

    isFormValid() {
        return (this.props.currentItem.title || this.itemChanges.title) &&
               (this.props.currentItem.description || this.itemChanges.description)
    }



    render() {
        return (
            <aside className="create-edit-container">
                <form className="create-edit-form"
                      id="create-edit-form"
                      data-id={this.props.currentItem.id}>

                    <div className="field-set">
                        <label htmlFor="task-title">title</label><br/>
                        <input type="text"
                               //id="task-title"
                               //className="task-title"
                               form="create-edit-form"
                               name="title"
                               defaultValue={this.props.currentItem.title}
                               onChange={this.handleInputChange.bind(this)}/>
                    </div>

                    <div className="field-set">
                        <label htmlFor="task-description">description</label><br/>
                        <textarea  //id="task-description"
                            //className="task-description"
                            form="create-edit-form"
                            name="description"
                            onChange={this.handleInputChange.bind(this)}
                            defaultValue={this.props.currentItem.description}>

                        </textarea>
                    </div>

                    <div className="field-set">
                        <label htmlFor="task-tags">tags</label><br/>
                        <input type="text"
                               form="create-edit-form"
                               //id="task-tags"
                               //className="task-tags"
                               name="tags"
                               defaultValue={this.props.currentItem.tags}
                               onChange={this.handleInputChange.bind(this)}/>
                    </div>

                    <div className="field-set">
                        <label htmlFor="priority">priority</label><br/>
                        <input type="radio"
                               form="create-edit-form"
                               name="priority"
                               value="1"
                               onChange={this.handleInputChange.bind(this)}
                               defaultChecked={Number(this.props.currentItem.priority) === 1}/>
                        <input type="radio"
                               form="create-edit-form"
                               name="priority"
                               value="2"
                               onChange={this.handleInputChange.bind(this)}
                               defaultChecked={Number(this.props.currentItem.priority) === 2}/>
                        <input type="radio"
                               form="create-edit-form"
                               name="priority"
                               value="3"
                               onChange={this.handleInputChange.bind(this)}
                               defaultChecked={Number(this.props.currentItem.priority) === 3}/>
                    </div>

                    <div className="field-set">
                        <button className={this.props.currentItem.id ? "update" : "create"}
                                onClick={this.handleButtonClick.bind(this)}>
                                {this.props.currentItem.id ? "update" : "create"}
                        </button>
                    </div>

                </form>
            </aside>
        );
    }
}

export default AddEditItem;