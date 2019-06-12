import { store } from "../../store";
import { ACTION_TYPE } from "../../storeUtils/actionsType";

export const doneToggle = (id) => {
    return {
        type: ACTION_TYPE.LIST_EDIT,
        name: ACTION_TYPE.DONE_TOGGLE,
        id: id
    }
};

export const markAllDone = (shouldBeCompleted) => {
    return {
        type: ACTION_TYPE.LIST_EDIT,
        name: ACTION_TYPE.MARK_ALL_DONE,
        shouldBeCompleted: !!shouldBeCompleted
    }
};

export const deleteItem = (id) => {
    return {
        type: ACTION_TYPE.LIST_EDIT,
        name: ACTION_TYPE.DELETE_ITEM,
        id: id
    }
};

export const actionsList = {
    doneToggle: id => store.dispatch(doneToggle(id)),
    markAllDone: (shouldBeCompleted) => store.dispatch(markAllDone(shouldBeCompleted)),
    deleteItem: id => store.dispatch(deleteItem(id)),
};