import { store } from "../../storeUtils/store";
import { ACTION_TYPE } from "../../storeUtils/actionsType";

export const applyFilter = (change) => {
    return {
        type: ACTION_TYPE.FILTER,
        change: change
    }
};

export const actionsFilters = {
    applyFilter: change => store.dispatch(applyFilter(change)),
};