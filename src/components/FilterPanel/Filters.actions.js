import { store } from "../../storeUtils/store";

export const filterChange = (change) => {
    return {
        type: 'FILTER',
        change: change
    }
};

export const actions = {
    filterChange: change => store.dispatch(filterChange(change)),
};