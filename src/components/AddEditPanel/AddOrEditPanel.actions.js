import { store } from "../../index";
import { ACTION_TYPE } from "../../storeUtils/actionsType";

const shownItemChange = (change) => {
    return {
        type: ACTION_TYPE.SHOWN_ITEM_EDIT,
        name: ACTION_TYPE.SHOWN_ITEM_CHANGE,
        change: change
    }
};

const createItem = (item) => {
    return {
        type: ACTION_TYPE.LIST_EDIT,
        name: ACTION_TYPE.ADD_ITEM,
        item: item
    }
};

const updateItem = (item) => {
    return {
        type: ACTION_TYPE.LIST_EDIT,
        name: ACTION_TYPE.UPDATE_ITEM,
        item : item
    }
};

export const actionsEditPanel = {
    shownItemChange: change => store.dispatch(shownItemChange(change)),
    createItem: item => store.dispatch(createItem(item)),
    updateItem: item => store.dispatch(updateItem(item)),
};