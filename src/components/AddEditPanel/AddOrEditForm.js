import React, {Component} from 'react';
import Title from './Title';
import Description from './Description';
import Tags from './Tags';
import Priority from './Priority';
import ButtonSection from './ButtonSection';
import {Utils} from "../../storeUtils/utils";

class AddOrEditForm extends Component {
    state = {
        shownItem: Object.assign({}, {
            id: null,
            title: '',
            description: '',
            priority: 2,
            tags: ''
        }, this.props.shownItem)
    };

    shouldComponentUpdate(nextProps, nextState) {
        /*
        Почему я не юзала Redux для хранения данных с этой формы:
        - не все данные аппки должны контролироваться хранилищем, в данном случае это действительно не обосновано
        - для опыта, хотела узнать как работать с хранилищем и без него в одном приложении //любопытство не удовлетворено:(
        */

        /*
        если не использовать Rеdux для контороля этой компоненты, то есть два варианта
        обновления this.state в зависимости от
        - изменения this.props (сверху от родителя)
        - изменения this.change (снизу от потомка)
        вариант 1 - этот:
        */
        if (this.props.shownItem.id !== nextProps.shownItem.id) {
            this.setState({
                shownItem: Object.assign({}, nextProps.shownItem)
            });
        }
        /*
        минус в том, что при изменении props рендер будет происходить два раза,
        однако при изменении state - как и положено, один.
        Зацикливания не будет благодаря проверке.
        вариант 2 -
        if (this.props.shownItem.id !== nextProps.shownItem.id) {
            this.state.shownItem = Object.assign({}, nextProps.shownItem)
        }
        минус в том, что меняется состояние напрямую, но это не имеет значения, потому что
        вызов рендера уже запрошен

        Есть еще один вариант - разделить эту компоненту на две, по логической функциональности
        на AddForm и EditForm - это реализовано в основной гит-ветке. Тот еще костыль.
        */
        return true;
    }

    handleInputChange(event) {
        let change = {};
        change[event.currentTarget.name] = event.currentTarget.value;

        this.setState({
            shownItem: Object.assign(this.state.shownItem, change)
        });
    }

    isFormValid() {
        return !!(this.state.shownItem.title && this.state.shownItem.description);
    }

    handleCreateButtonClick(event) {
        event.preventDefault();

        if (this.isFormValid()) {
            let newItem = Object.assign({}, {
                isDone: false,
                priority: 2,
                tags: ''
            }, this.state.shownItem);

            newItem.id = Math.floor(Math.random() * 10000);

            newItem.tags = newItem.tags
                .split(',')
                .map(tag => tag.trim())
                .filter((tag) => { return tag !== '' })
                .join(', ');

            this.reset();
            this.props.createItem(newItem);
        } else {
            console.error('Title and Description are required');
        }
    }

    handleEditButtonClick(event) {
        event.preventDefault();
        let updatedItem = this.state.shownItem;

        this.clearForm(); // here state is dropped

        this.props.updateItem(updatedItem);
    }

    reset(event) {
        event && event.preventDefault();

        this.setState({
            shownItem: {}
        });
    }

    restore(event) {
        event && event.preventDefault();

        this.setState({
            shownItem: Object.assign({}, this.props.shownItem)
        });
    }

    clearForm(event) {
        event && event.preventDefault();

        this.props.chooseItem({
            id: null,
            title: '',
            description: '',
            priority: 2,
            tags: ''
        });
    }

    render() {
        let isFormValid = this.isFormValid();
        let wasSomethingChanged = !Utils.isEqual(this.state.shownItem, this.props.shownItem);
        let isCreateMode = !(this.state.shownItem.id);
        let areAllFieldsEmpty = !(this.state.shownItem.title || this.state.shownItem.description || this.state.shownItem.tags);

        return (
            <aside className="add-edit-panel">
                <form className="">

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
                        value={this.state.shownItem.priority || 2}/>

                    <ButtonSection
                        isValid={isFormValid}
                        wasChanged={wasSomethingChanged}
                        isCreateMode={isCreateMode}
                        areAllFieldsEmpty={areAllFieldsEmpty}
                        onCreate={this.handleCreateButtonClick.bind(this)}
                        onReset={this.reset.bind(this)}
                        onEdit={this.handleEditButtonClick.bind(this)}
                        onRestore={this.restore.bind(this)}
                        onCancel={this.clearForm.bind(this)}/>
                </form>
            </aside>
        );
    }
}

export default AddOrEditForm;
