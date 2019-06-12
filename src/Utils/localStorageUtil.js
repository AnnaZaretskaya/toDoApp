import { ACTION_TYPE } from "../storeUtils/actionsType";

export const localStorageSync = store => next => action => {
    const result = next(action);

    if (action.type === ACTION_TYPE.LIST_EDIT) {
        localStorage.setItem('toDoList', JSON.stringify(store.getState().list))
    }
    return result;
};