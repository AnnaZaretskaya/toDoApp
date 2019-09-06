import { store } from "../../storeUtils/store";
import { shownItem } from "../../storeUtils/initialStoreState";

export const doneToggle = (id) => {
    return {
        type: 'DONE_TOGGLE',
        shouldBeSavedToStorage: true,
        id: id
    }
};

export const markAllDone = (shouldBeCompleted) => {
    return {
        type: 'MARK_ALL_DONE',
        shouldBeSavedToStorage: true,
        shouldBeCompleted: !!shouldBeCompleted
    }
};

export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        shouldBeSavedToStorage: true,
        id: id
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
    doneToggle: id => store.dispatch(doneToggle(id)),
    markAllDone: (shouldBeCompleted) => store.dispatch(markAllDone(shouldBeCompleted)),
    deleteItem: id => store.dispatch(deleteItem(id)),
    chooseShownItem: (id) => {store.dispatch(chooseShownItem(id))}
};
