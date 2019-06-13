
/*addEdit section*/
export const fakeShownItemFull = {
    id: 1100,
    title: 'fakeTitle2',
    description: 'fakeDescription2',
    priority: '1',
    tags: 'fakeTag5, fakeTag6,,,,   ,  , fakeTag7, fakeTag8',
};

export const fakeAddEditActions = {
    mock1: {
        type: 'SHOWN_ITEM_EDIT',
        name: 'shownItemChange',
        change: {
            title: 'extendedTitle'
        }
    },
    mock2: {
        type: 'SHOWN_ITEM_EDIT',
        name: 'shownItemChoose',
        item: { id: 'choosenItem' }
    },
    mock3: {
        type: 'not valid'
    }
};

export const reducerAddEditOutcome = {
    result1: {
        id: 1100,
        title: 'extendedTitle',
        description: 'fakeDescription2',
        priority: '1',
        tags: 'fakeTag5, fakeTag6,,,,   ,  , fakeTag7, fakeTag8'
    },
    result2: { id: 'choosenItem' }
};

/*filters section*/
export const fakeFilter = {
    showUnDone: false,
    content: 'fake content',
    priorities: [],
    selectedTags: []
};

export const fakeFiltersActions = {
    type: 'FILTER',
    change: { priorities: ['2'] }
};

export const reducerFiltersOutcome = {
    showUnDone: false,
    content: 'fake content',
    priorities: ['2'],
    selectedTags: []
};

/*list section*/
const fakeListInit = [{
    id: 1000,
    title: 'fakeTitle1',
    description: 'fakeDescription1',
    priority: '2',
    tags: ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'],
    isDone: false
}, {
    id: 1100,
    title: 'fakeTitle2',
    description: 'fakeDescription2',
    priority: '1',
    tags: ['fakeTag5', 'fakeTag6', 'fakeTag7', 'fakeTag8'],
    isDone: false
}, {
    id: 1010,
    title: 'fakeTitle3',
    description: 'fakeDescription3',
    priority: '2',
    tags: ['fakeTag9', 'fakeTag10', 'fakeTag11', 'fakeTag12'],
    isDone: true
}, {
    id: 1001,
    title: 'fakeTitle4',
    description: 'fakeDescription4',
    priority: '3',
    tags: ['fakeTag13', 'fakeTag14', 'fakeTag15', 'fakeTag16'],
    isDone: false
}, {
    id: 2000,
    title: 'fakeTitle5',
    description: 'fakeDescription5',
    priority: '2',
    tags: ['fakeTag17', 'fakeTag18', 'fakeTag19', 'fakeTag20'],
    isDone: false
}];

export const fakeList = [].concat(fakeListInit);

export const fakeListActions = {
    mock1: {
        type: 'LIST_EDIT',
        name: 'updateItem',
    },
    mock2: {
        type: 'LIST_EDIT',
        name: 'updateItem',
        item: {
            id: 2000,
            title: 'fakeTitle5 updated',
            description: 'fakeDescription5 updated',
            tags: ['fakeTag17 upd', 'fakeTag18 upd', 'fakeTag19 upd', 'fakeTag20 upd', 'fakeTag20 added'],
            priority: '3',
            isDone: false
        }
    },
    mock3: {
        type: 'LIST_EDIT',
        name: 'deleteItem',
        id: 2000
    },
    mock4: {
        type: 'LIST_EDIT',
        name: 'addItem',
        item: {
            id: 2001,
            title: 'fakeTitle5 new',
            description: 'fakeDescription5 new',
            priority: '2',
            tags: ['fakeTag17 new', 'fakeTag18 new', 'fakeTag19 new', 'fakeTag20 new'],
            isDone: false
        }
    },
    mock5: {
        type: 'LIST_EDIT',
        name: 'doneToggle',
        id: 2000
    },
    mock6: {
        type: 'LIST_EDIT',
        name: 'markAllDone',
        shouldBeCompleted: true
    },
    mock7: {
        type: 'LIST_EDIT',
        name: 'markAllDone',
        shouldBeCompleted: false
    }
};

export const reducerListOutcome = {
    result1: [].concat(fakeListInit),
    result2: [{
        id: 1000,
        title: 'fakeTitle1',
        description: 'fakeDescription1',
        priority: '2',
        tags: ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'],
        isDone: false
    }, {
        id: 1100,
        title: 'fakeTitle2',
        description: 'fakeDescription2',
        priority: '1',
        tags: ['fakeTag5', 'fakeTag6', 'fakeTag7', 'fakeTag8'],
        isDone: false
    }, {
        id: 1010,
        title: 'fakeTitle3',
        description: 'fakeDescription3',
        priority: '2',
        tags: ['fakeTag9', 'fakeTag10', 'fakeTag11', 'fakeTag12'],
        isDone: true
    }, {
        id: 1001,
        title: 'fakeTitle4',
        description: 'fakeDescription4',
        priority: '3',
        tags: ['fakeTag13', 'fakeTag14', 'fakeTag15', 'fakeTag16'],
        isDone: false
    }, {
        id: 2000,
        title: 'fakeTitle5 updated',
        description: 'fakeDescription5 updated',
        tags: ['fakeTag17 upd', 'fakeTag18 upd', 'fakeTag19 upd', 'fakeTag20 upd', 'fakeTag20 added'],
        priority: '3',
        isDone: false
    }],
    result3: [{
        id: 1000,
        title: 'fakeTitle1',
        description: 'fakeDescription1',
        priority: '2',
        tags: ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'],
        isDone: false
    }, {
        id: 1100,
        title: 'fakeTitle2',
        description: 'fakeDescription2',
        priority: '1',
        tags: ['fakeTag5', 'fakeTag6', 'fakeTag7', 'fakeTag8'],
        isDone: false
    }, {
        id: 1010,
        title: 'fakeTitle3',
        description: 'fakeDescription3',
        priority: '2',
        tags: ['fakeTag9', 'fakeTag10', 'fakeTag11', 'fakeTag12'],
        isDone: true
    }, {
        id: 1001,
        title: 'fakeTitle4',
        description: 'fakeDescription4',
        priority: '3',
        tags: ['fakeTag13', 'fakeTag14', 'fakeTag15', 'fakeTag16'],
        isDone: false
    }],
    result4: [].concat(fakeListInit, {
        id: 2001,
        title: 'fakeTitle5 new',
        description: 'fakeDescription5 new',
        priority: '2',
        tags: ['fakeTag17 new', 'fakeTag18 new', 'fakeTag19 new', 'fakeTag20 new'],
        isDone: false
    }),
    result5: [{
        id: 1000,
        title: 'fakeTitle1',
        description: 'fakeDescription1',
        priority: '2',
        tags: ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'],
        isDone: false
    }, {
        id: 1100,
        title: 'fakeTitle2',
        description: 'fakeDescription2',
        priority: '1',
        tags: ['fakeTag5', 'fakeTag6', 'fakeTag7', 'fakeTag8'],
        isDone: false
    }, {
        id: 1010,
        title: 'fakeTitle3',
        description: 'fakeDescription3',
        priority: '2',
        tags: ['fakeTag9', 'fakeTag10', 'fakeTag11', 'fakeTag12'],
        isDone: true
    }, {
        id: 1001,
        title: 'fakeTitle4',
        description: 'fakeDescription4',
        priority: '3',
        tags: ['fakeTag13', 'fakeTag14', 'fakeTag15', 'fakeTag16'],
        isDone: false
    }, {
        id: 2000,
        title: 'fakeTitle5',
        description: 'fakeDescription5',
        priority: '2',
        tags: ['fakeTag17', 'fakeTag18', 'fakeTag19', 'fakeTag20'],
        isDone: true
    }],
    result6: [{
        id: 1000,
        title: 'fakeTitle1',
        description: 'fakeDescription1',
        priority: '2',
        tags: ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'],
        isDone: true
    }, {
        id: 1100,
        title: 'fakeTitle2',
        description: 'fakeDescription2',
        priority: '1',
        tags: ['fakeTag5', 'fakeTag6', 'fakeTag7', 'fakeTag8'],
        isDone: true
    }, {
        id: 1010,
        title: 'fakeTitle3',
        description: 'fakeDescription3',
        priority: '2',
        tags: ['fakeTag9', 'fakeTag10', 'fakeTag11', 'fakeTag12'],
        isDone: true
    }, {
        id: 1001,
        title: 'fakeTitle4',
        description: 'fakeDescription4',
        priority: '3',
        tags: ['fakeTag13', 'fakeTag14', 'fakeTag15', 'fakeTag16'],
        isDone: true
    }, {
        id: 2000,
        title: 'fakeTitle5',
        description: 'fakeDescription5',
        priority: '2',
        tags: ['fakeTag17', 'fakeTag18', 'fakeTag19', 'fakeTag20'],
        isDone: true
    }],
    result7: [{
        id: 1000,
        title: 'fakeTitle1',
        description: 'fakeDescription1',
        priority: '2',
        tags: ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'],
        isDone: false
    }, {
        id: 1100,
        title: 'fakeTitle2',
        description: 'fakeDescription2',
        priority: '1',
        tags: ['fakeTag5', 'fakeTag6', 'fakeTag7', 'fakeTag8'],
        isDone: false
    }, {
        id: 1010,
        title: 'fakeTitle3',
        description: 'fakeDescription3',
        priority: '2',
        tags: ['fakeTag9', 'fakeTag10', 'fakeTag11', 'fakeTag12'],
        isDone: false
    }, {
        id: 1001,
        title: 'fakeTitle4',
        description: 'fakeDescription4',
        priority: '3',
        tags: ['fakeTag13', 'fakeTag14', 'fakeTag15', 'fakeTag16'],
        isDone: false
    }, {
        id: 2000,
        title: 'fakeTitle5',
        description: 'fakeDescription5',
        priority: '2',
        tags: ['fakeTag17', 'fakeTag18', 'fakeTag19', 'fakeTag20'],
        isDone: false
    }]
};