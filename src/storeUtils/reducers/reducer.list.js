export function list(list = [], action = {}) {
    switch (action.type) {

        case 'UPDATE_ITEM':
            let newList = [...list];
            let index = newList.findIndex((item) => item.id === action.item.id);

            newList[index] = action.item;
            newList[index].isDone = list[index].isDone;

            return newList;

        case 'DELETE_ITEM':

            return list.filter(item => item.id !== action.id);

        case 'ADD_ITEM':

            return [...list, action.item];

        case 'DONE_TOGGLE':
            let doneToggleList = [...list];
            let element = doneToggleList.find((item) => item.id === action.id);

            element.isDone = !element.isDone;

            return doneToggleList;

        case 'MARK_ALL_DONE':
            let doneList = [...list];

            doneList.forEach((item) => {
                item.isDone = action.shouldBeCompleted;
            });

            return doneList;

        default:

            return list
    }
}