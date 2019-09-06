export function shownItem(shownItem = {}, action = {}) {
    switch (action.type) {
        case 'SHOWN_ITEM_CHANGE':

            return {...shownItem, ...action.change};
        case 'SHOWN_ITEM_CHOOSE':

            return {...action.item};
        default:

            return shownItem
    }
}