let toDoList = [{
    id: 1,
    title: 'to study React',
    description: 'Ololo-trololol',
    tags: ['evaluation', 'job', 'suffering'],
    priority: '1',
    isDone: false
}, {
    id: 2,
    title: 'to study js',
    description: 'Ololo-trololol',
    tags: ['evaluation', 'job', 'not big suffering'],
    priority: '2',
    isDone: false
}, {
    id: 3,
    title: 'to do something',
    description: 'Ololo-trololol',
    tags: ['tag', 'tag2', 'tag5'],
    priority: '3',
    isDone: true
}, {
    id: 4,
    title: 'to do something else',
    description: 'Ololo-trololol',
    tags: ['tag3', 'tag1 tag7', 'tag7'],
    priority: '3',
    isDone: false
}, {
    id: 5,
    title: 'to do more than you can',
    description: 'Ololo-trololol',
    tags: ['tag1', 'tag5 tag1', 'tag4'],
    priority: '3',
    isDone: false
}];

let initState = {
    filters: {
        showUnDone: false,
        content: '',
        priorities: [],
        selectedTags: []
    },
    shownItem: {
        id: null,
        title: '',
        description: '',
        priority: 2,
        tags: ''
    },
    list: JSON.parse(localStorage.getItem('toDoList')) || toDoList
};

export default initState;