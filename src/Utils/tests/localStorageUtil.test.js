import { localStorageSync } from '../localStorageUtil';

describe('localStorageSync', () => {
    let action;
    const store = {
        getState: () => {
            return {
                list: [1, 2, 3]
            }
        }
    };
    const next = (action) => { return action };

    beforeEach(() => {
        jest.spyOn(Storage.prototype, 'setItem');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should set list if list was edited and return result of `next` call', () => {
        action = { type: 'LIST_EDIT' };

        expect(localStorageSync(store)(next)(action)).toEqual(action);
        expect(localStorage.setItem).toBeCalledWith('toDoList', "[1,2,3]");
    });

    it('should not set list if list was not edited', () => {
        action = { type: 'not LIST_EDIT' };

        localStorageSync(store)(next)(action);

        expect(localStorage.setItem).toBeCalledTimes(0);
    });
});