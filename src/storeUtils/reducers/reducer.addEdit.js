import { ACTION_TYPE } from '../actionsType';

export function shownItem(shownItem = {}, action = {}) {
    if (action.type === ACTION_TYPE.SHOWN_ITEM_EDIT) {
        switch (action.name) {
            case ACTION_TYPE.SHOWN_ITEM_CHANGE:
                return Object.assign({}, shownItem, action.change);
            case ACTION_TYPE.SHOWN_ITEM_CHOOSE:
                return Object.assign({}, action.item);
            default:
                return shownItem
        }
    }
    return shownItem
}