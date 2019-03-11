import {ACTION_TYPE} from "./actionsType";

export function filters(filters = {}, action) {
    switch (action.type) {
        case ACTION_TYPE.FILTER:
            return Object.assign({}, filters, action.change);
        default:
            return filters
    }
}