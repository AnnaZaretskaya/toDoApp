import TagsWithHandler from './components/Tags';
import TitleWithHandler from './components/Title';
import React, {Component} from 'react';
import PriorityWithHandler from './components/Priority';
import initState from '../../storeUtils/initialStoreState';
import DescriptionWithHandler from './components/Description';
import _ from 'underscore';
import ButtonSection from './components/ButtonSection';
import { connect } from 'react-redux';
import { actionsShared } from "../shared.actions";
import { actionsEditPanel } from './AddOrEditPanel.actions';
import {store} from "../../index";


class AddOrEditPanel extends Component {

    isFormValid() {
        return !!(this.props.shownItem.title && this.props.shownItem.description);
    }

    handleCreateButtonClick(event) {
        event.preventDefault();

        if (this.isFormValid()) {
            let newItem = Object.assign({}, this.props.shownItem, {id: Math.floor(Math.random() * 10000), isDone: false});

            newItem.tags = newItem.tags
                .split(',')
                .map(tag => tag.trim())
                .filter((tag) => { return tag !== '' });

            this.reset();
            actionsEditPanelExtended.createItem(newItem);
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

        actionsEditPanelExtended.updateItem(updatedItem);
    }

    reset(event) {
        event && event.preventDefault();

        actionsEditPanelExtended.chooseShownItem();
    }

    restore(event) {
        event && event.preventDefault();

        actionsEditPanelExtended.chooseShownItem(this.props.shownItem.id);
    }

    render() {
        let wasChanged = !_.isEqual(this.props.shownItem,this.props.editedItem);
        let isFormValid = this.isFormValid();
        let isCreateMode = !(this.props.shownItem.id);
        let areAllFieldsEmpty = !(this.props.shownItem.title || this.props.shownItem.description || this.props.shownItem.tags);

        return (
            <aside className="add-edit-panel">
                <form className="">

                    <TitleWithHandler
                        onChange={actionsEditPanelExtended.shownItemChange}
                        value={this.props.shownItem.title}/>

                    <DescriptionWithHandler
                        onChange={actionsEditPanelExtended.shownItemChange}
                        value={this.props.shownItem.description}/>

                    <TagsWithHandler
                        onChange={actionsEditPanelExtended.shownItemChange}
                        value={this.props.shownItem.tags}/>

                    <PriorityWithHandler
                        onChange={actionsEditPanelExtended.shownItemChange}
                        value={this.props.shownItem.priority}/>

                    <ButtonSection
                        isValid={isFormValid}
                        isCreateMode={isCreateMode}
                        wasChanged={wasChanged}
                        areAllFieldsEmpty={areAllFieldsEmpty}
                        onCreate={this.handleCreateButtonClick.bind(this)}
                        onReset={this.reset.bind(this)}
                        onEdit={this.handleEditButtonClick.bind(this)}
                        onRestore={this.restore.bind(this)}/>
                </form>
            </aside>
        );
    }
}

function mapStateToProps(data) {
    let editedItem;

    if (data.shownItem.id) {
        editedItem = Object.assign({}, data.list.find((item) => {
            return item.id === data.shownItem.id
        }));

        if (typeof editedItem.tags === 'string' || !editedItem.tags) {
            console.log('error');
            console.log('id is', editedItem.id);
            console.log('list is', store.getState().list);
        }

        editedItem.tags = editedItem.tags.join(', ');
    }

    return {
        shownItem: data.shownItem,
        editedItem: editedItem || initState.shownItem
    }
}

let actionsEditPanelExtended = {...actionsShared, ...actionsEditPanel};

export default connect(mapStateToProps, actionsEditPanelExtended)(AddOrEditPanel);
