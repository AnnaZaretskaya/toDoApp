import { ACTION_TYPE } from './actions';

export function filters(filters = {}, action) {
    return (action.type === ACTION_TYPE.FILTER)
        ? Object.assign({}, filters, action.change)
        : filters
}

export function list(list = [], action) {
    return (action.type === ACTION_TYPE.LIST_EDIT)
        ? newList[action.name](list, action)
        : list
}

let newList = {
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
