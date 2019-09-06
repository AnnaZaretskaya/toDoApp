import _ from 'underscore';
import Tags from './components/Tags';
import { connect } from 'react-redux';
import Title from './components/Title';
import React, { Component } from 'react';
import Priority from './components/Priority';
import { compose, lifecycle } from "recompose";
import Description from './components/Description';
import { actions } from './AddOrEditPanel.actions';
import ButtonSection from './components/ButtonSection';
import { initState } from '../../storeUtils/initialStoreState';

export class AddOrEditPanel extends Component {

    isFormValid() {
        return !!(this.props.shownItem.title && this.props.shownItem.description);
    }

    handleCreateButtonClick(event) {
        event.preventDefault();

        if (this.isFormValid()) {
            let newItem = {...this.props.shownItem, ...{id: Math.floor(Math.random() * 10000), isDone: false}};

            newItem.tags = newItem.tags
                .split(',')
                .map(tag => tag.trim())
                .filter((tag) => { return tag !== '' });

            this.reset();
            actions.createItem(newItem);
        } else {
            console.error('Title and Description are required');
        }
    }

    handleEditButtonClick(event) {
        event.preventDefault();
        let updatedItem = this.props.shownItem;

        updatedItem.tags = updatedItem.tags
            .split(',')
            .map(tag => tag.trim())
            .filter((tag) => { return tag !== '' });

        this.reset();

        actions.updateItem(updatedItem);
    }

    reset(event) {
        event && event.preventDefault();

        actions.chooseShownItem();
    }

    restore(event) {
        event && event.preventDefault();

        actions.chooseShownItem(this.props.shownItem.id);
    }

    render() {
        let wasChanged = !_.isEqual(this.props.shownItem, this.props.editedItem);
        let isFormValid = this.isFormValid();
        let isCreateMode = !(this.props.shownItem.id);
        let areAllFieldsEmpty = !(this.props.shownItem.title || this.props.shownItem.description || this.props.shownItem.tags);

        return (
            <aside className="add-edit-panel">
                <form id="add-edit-form">

                    <Title
                        onChange={actions.shownItemChange}
                        value={this.props.shownItem.title}/>

                    <Description
                        onChange={actions.shownItemChange}
                        value={this.props.shownItem.description}/>

                    <Tags
                        onChange={actions.shownItemChange}
                        value={this.props.shownItem.tags}/>

                    <Priority
                        onChange={actions.shownItemChange}
                        value={[this.props.shownItem.priority]}/>

                    <ButtonSection
                        isValid={isFormValid}
                        isCreateMode={isCreateMode}
                        wasChanged={wasChanged}
                        areAllFieldsEmpty={areAllFieldsEmpty}
                        onCreate={(event) => this.handleCreateButtonClick(event)}
                        onReset={(event) => this.reset(event)}
                        onEdit={(event) => this.handleEditButtonClick(event)}
                        onRestore={(event) => this.restore(event)}/>
                </form>
            </aside>
        );
    }
}

export function mapStateToProps(data) {
    let editedItem;

    if (data.shownItem.id) {
        editedItem = {...data.list.find((item) => {
            return item.id === data.shownItem.id
        })};

        editedItem.tags = editedItem.tags.join(', ');
    }

    return {
        shownItem: data.shownItem,
        editedItem: editedItem || initState.shownItem
    };
}

const enhance = compose(
    connect(mapStateToProps),
    lifecycle({
        componentDidCatch(error) {
            console.log('Oops, error!', error);
        }
    })
);

export default enhance(AddOrEditPanel);