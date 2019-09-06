import { store } from "../../storeUtils/store";
import { shownItem } from "../../storeUtils/initialStoreState";

export const shownItemChange = (change) => {
    return {
        type: 'SHOWN_ITEM_CHANGE',
        change: change
    }
};

export const createItem = (item) => {
    return {
        type: 'ADD_ITEM',
        shouldBeSavedToStorage: true,
        item: item
    }
};

export const updateItem = (item) => {
    return {
        type: 'UPDATE_ITEM',
        shouldBeSavedToStorage: true,
        item : item
    }
};

export const chooseShownItem = (id) => {
    if (!id) {
        return {
            type: 'SHOWN_ITEM_CHOOSE',
            item: shownItem
        };
    }

    let item = {...store.getState().list.find(item => { return item.id === id })};

    item.tags = item.tags.join(', ');

    return {
        type: 'SHOWN_ITEM_CHOOSE',
        item: item
    }
};

export const actions = {
    shownItemChange: change => store.dispatch(shownItemChange(change)),
    createItem: item => store.dispatch(createItem(item)),
    updateItem: item => store.dispatch(updateItem(item)),
    chooseShownItem: (id) => store.dispatch(chooseShownItem(id))
};