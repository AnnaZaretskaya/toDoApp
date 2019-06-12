import { store } from "../../store";
import { ACTION_TYPE } from "../../storeUtils/actionsType";

export const chooseShownItem = (id) => {
    if (!id) {
        return {
            type: ACTION_TYPE.SHOWN_ITEM_EDIT,
            name: ACTION_TYPE.SHOWN_ITEM_CHOOSE,
            item: {
                id: null,
                title: '',
                description: '',
                priority: 2,
                tags: ''
            }
        }
    }

    let item = Object.assign({}, store.getState().list.find((item) => {return item.id === id}));

    if (typeof item.tags === 'string') {
        console.log('error');
        console.log('id is', id);
        console.log('list is', store.getState().list);
    }

    item.tags = item.tags.join(', ');

    return {
        type: ACTION_TYPE.SHOWN_ITEM_EDIT,
        name: ACTION_TYPE.SHOWN_ITEM_CHOOSE,
        item: item
    }
};

export const actionsShared  = {
    chooseShownItem: (id) => {store.dispatch(chooseShownItem(id))}
};