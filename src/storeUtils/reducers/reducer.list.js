import { ACTION_TYPE } from '../actionsType';

export function list(list = [], action = {}) {
    if (action.type === ACTION_TYPE.LIST_EDIT) {
        switch (action.name) {
            case ACTION_TYPE.UPDATE_ITEM:
                return listReducer.updateItem(list, action);
            case ACTION_TYPE.DELETE_ITEM:
                return listReducer.deleteItem(list, action);
            case ACTION_TYPE.ADD_ITEM:
                return listReducer.addItem(list, action);
            case ACTION_TYPE.DONE_TOGGLE:
                return listReducer.doneToggle(list, action);
            case ACTION_TYPE.MARK_ALL_DONE:
                return listReducer.markAllDone(list, action);
            default:
                return list
        }
    }
    return list
}

let listReducer = {
    addItem: (list, action) => {
        return action.item
            ? [].concat(list, action.item)
            : list;
    },

    doneToggle: (list, action) => {
        if (!action.id) {
            return list;
        }

        let newList = [].concat(list);
        let index = newList.findIndex((item) => item.id === action.id);

        newList[index].isDone = !newList[index].isDone;

        return newList;
    },

    markAllDone: (list, action) =>{
        let newList = [].concat(list);

        newList.forEach((item) => {
            item.isDone = action.shouldBeCompleted;
        });

        return newList;
    },

    deleteItem: (list, action) => {
        if (!action.id) {
            return list;
        }

        return list.filter(item => item.id !== action.id);
    },

    updateItem: (list, action) => {
        if (!action.item) {
            return list;
        }

        let newList = [].concat(list);
        let index = newList.findIndex((item) => item.id === action.item.id);

        newList[index] = action.item;
        newList[index].isDone = list[index].isDone;

        return newList;
    }

};