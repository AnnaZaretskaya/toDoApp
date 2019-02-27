// https://habrastorage.org/files/6d3/765/254/6d3765254d0440bdad00284719d77350.jpg

import { store } from '../index';

export const ACTION_TYPE = {
    FILTER: 'FILTER',
        DONE_FILTER: 'DONE_FILTER',
        CONTENT_FILTER: 'CONTENT_FILTER',
        PRIORITY_FILTER: 'PRIORITY_FILTER',
        TAG_FILTER: 'TAG_FILTER',

    LIST_EDIT: 'LIST_EDIT',
        UPDATE_ITEM: 'updateItem',
        DELETE_ITEM: 'deleteItem',
        ADD_ITEM: 'addItem',
        DONE_TOGGLE: 'doneToggle',
        MARK_ALL_DONE: 'markAllDone',
};

const createItem = (item) => {
    return {
        type: ACTION_TYPE.LIST_EDIT,
        name: ACTION_TYPE.ADD_ITEM,
        item: item
    }
};

const doneToggle = (id) => {
    return {
        type: ACTION_TYPE.LIST_EDIT,
        name: ACTION_TYPE.DONE_TOGGLE,
        id: id
    }
};

const markAllDone = (shouldBeCompleted) => {
  return {
      type: ACTION_TYPE.LIST_EDIT,
      name: ACTION_TYPE.MARK_ALL_DONE,
      shouldBeCompleted: shouldBeCompleted
  }
};

const updateItem = (item) => {
    return {
        type: ACTION_TYPE.LIST_EDIT,
        name: ACTION_TYPE.UPDATE_ITEM,
        item : item
    }
};

const deleteItem = (id) => {
    return {
        type: ACTION_TYPE.LIST_EDIT,
        name: ACTION_TYPE.DELETE_ITEM,
        id: id
    }
};

// here change - updated filter`s value, for example, already merged tag`s array {priorities: [1,3]}
const applyFilter = (change) => {
    return {
        type: ACTION_TYPE.FILTER,
        change: change
    }
};

export const actionCreators = {
    applyFilter: change => store.dispatch(applyFilter(change)),

    doneToggle: id => store.dispatch(doneToggle(id)),
    markAllDone: (shouldBeCompleted) => store.dispatch(markAllDone(shouldBeCompleted)),
    deleteItem: id => store.dispatch(deleteItem(id)),

    createItem: item => store.dispatch(createItem(item)),
    updateItem: item => store.dispatch(updateItem(item)),
};
