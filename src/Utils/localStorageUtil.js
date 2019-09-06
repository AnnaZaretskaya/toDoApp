export const localStorageSync = store => next => action => {
    const result = next(action);

    if (action.shouldBeSavedToStorage) {
        localStorage.setItem('toDoList', JSON.stringify(store.getState().list))
    }
    return result;
};
/*
для тех кто я:
типа вот так:
localStorageSync(store)(next)(action)
*/