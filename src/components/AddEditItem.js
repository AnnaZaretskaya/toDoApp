import React, {Component} from 'react';
import $ from 'jquery';


class AddEditItem extends Component {

    constructor(props) {
        super(props);

        //console.log('AddEditItem get currentItem = ', this.props.currentItem);

        this.config = {
            id: '',
            title: '',
            description: '',
            tags: '',
            priority: 2,
            buttonMode: 'create'
        }
    }


    createToDoItem() {
        let newItem = {
            id: Math.floor(Math.random() * 10000),
            title: $('.create-edit-container .task-title').val(),
            description: $('.create-edit-container .task-description').val(),
            tags: $('.create-edit-container .task-tags').val().split(', '),
            priority: Number($('.create-edit-container input[name=priority]:checked').value),
        };

        if (this.isFormValid(newItem)) {
            $('.create-edit-container .create-edit-form').get(0).reset();

            this.props.onAddItem(newItem);
        }
    }

    isFormValid(newItem) {
        return newItem.title && newItem.description;
    }

    componentDidMount() {
        this.subscribeEvents();
        $('.create-edit-container').find(`input[value=${this.config.priority}]`).prop('checked', true);
    }

    subscribeEvents() {
        $('.create-edit-container .create').on('click', this.createToDoItem.bind(this));
        $('.create-edit-container .update').on('click', (event) => this.xxxxxxxxx(event));
    }

    componentDidUpdate() {
        console.log('this.config in componentDidUpdate is ', this.config);
        //console.log($('.create-edit-container').find(`input[value=${this.config.priority}]`).prop('checked'));
        $('.create-edit-container').find(`input[value=${this.config.priority}]`).prop('checked', true);
        //console.log($('.create-edit-container').find(`input[value=${this.config.priority}]`).prop('checked'));

        //console.log('componentDidUpdate was called');
    }

    render() {

        console.log('this.config in render before is ', this.config);

        if (this.props.currentItem.id) {
            this.config = {
                id: this.props.currentItem.id,
                title: this.props.currentItem.title,
                description: this.props.currentItem.description,
                tags: this.props.currentItem.tags.join(', '),
                priority: this.props.currentItem.priority,
                buttonMode: 'update'
            }
        }

        console.log('this.config in render after is ', this.config);

        return (
            <aside className="create-edit-container">
                <form className="create-edit-form" data-id={this.config.id}>

                    <div className="field-set">
                        <label htmlFor="task-title">title</label><br/>
                        <input type="text" id="task-title" className="task-title" defaultValue={this.config.title}/>
                    </div>

                    <div className="field-set">
                        <label htmlFor="task-description">description</label><br/>
                        <textarea  id="task-description" className="task-description">{this.config.description}</textarea>
                    </div>

                    <div className="field-set">
                        <label htmlFor="task-tags">tags</label><br/>
                        <input type="text" id="task-tags" className="task-tags" defaultValue={this.config.tags}/>
                    </div>

                    <div className="field-set">
                        <label htmlFor="priority">priority</label><br/>
                        <input type="radio" name="priority" value="1"/>
                        <input type="radio" name="priority" value="2"/>
                        <input type="radio" name="priority" value="3"/>
                    </div>

                    <div className="field-set">
                        <button className={this.config.buttonMode}>{this.config.buttonMode}</button>
                    </div>

                </form>
            </aside>
        );


    }
}

export default AddEditItem;