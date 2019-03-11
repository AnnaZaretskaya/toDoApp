import { store } from "../../index";
import { ACTION_TYPE } from "../../storeUtils/actionsType";

const applyFilter = (change) => {
    return {
        type: ACTION_TYPE.FILTER,
        change: change
    }
};

export const actionsFilters = {
    applyFilter: change => store.dispatch(applyFilter(change)),
};