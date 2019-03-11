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
    list: JSON.parse(localStorage.getItem('toDoList')) || []
};

export default initState;