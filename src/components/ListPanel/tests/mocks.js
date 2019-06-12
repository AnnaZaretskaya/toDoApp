
/*ListPanel.actions section*/
export const mockActionListOutcome = {
    result1: {
        type: 'LIST_EDIT',
        name: 'doneToggle',
        id: 1111
    },
    result2: {
        type: 'LIST_EDIT',
        name: 'markAllDone',
        shouldBeCompleted: true
    },
    result3: {
        type: 'LIST_EDIT',
        name: 'deleteItem',
        id: 9090909
    }
};

/*ListPanel section*/
export const fakeListMocks = {
    mock1: [{
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
        tags: ['fakeTag9', 'fakeTag', 'fakeTag11', 'fakeTag12'],
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
        tags: ['fakeTag17', 'fakeTag', 'fakeTag19', 'fakeTag20'],
        isDone: false
    }],
    mock2: [{
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
    }]
};

export const fakeFiltersMock1 = {
    showUnDone: false,
    content: 'fakeDescription5',
    priorities: [],
    selectedTags: []
};

export const fakeFiltersMock2 = {
    showUnDone: false,
    content: '',
    priorities: [],
    selectedTags: ['fakeTag18']
};

export const fakeListFiltersResult = {
    mock1: [{
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
        tags: ['fakeTag17', 'fakeTag', 'fakeTag19', 'fakeTag20'],
        isDone: false
    }],
    mock2: [{
        id: 2000,
        title: 'fakeTitle5',
        description: 'fakeDescription5',
        priority: '2',
        tags: ['fakeTag17', 'fakeTag', 'fakeTag19', 'fakeTag20'],
        isDone: false
    }],
    mock3: [{
        id: 1000,
        title: 'fakeTitle1',
        description: 'fakeDescription1',
        priority: '2',
        tags: ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'],
        isDone: false
    }, {
        id: 1010,
        title: 'fakeTitle3',
        description: 'fakeDescription3',
        priority: '2',
        tags: ['fakeTag9', 'fakeTag', 'fakeTag11', 'fakeTag12'],
        isDone: true
    }, {
        id: 2000,
        title: 'fakeTitle5',
        description: 'fakeDescription5',
        priority: '2',
        tags: ['fakeTag17', 'fakeTag', 'fakeTag19', 'fakeTag20'],
        isDone: false
    }],
    mock4: [ {
        id: 1010,
        title: 'fakeTitle3',
        description: 'fakeDescription3',
        priority: '2',
        tags: ['fakeTag9', 'fakeTag', 'fakeTag11', 'fakeTag12'],
        isDone: true
    }, {
        id: 2000,
        title: 'fakeTitle5',
        description: 'fakeDescription5',
        priority: '2',
        tags: ['fakeTag17', 'fakeTag', 'fakeTag19', 'fakeTag20'],
        isDone: false
    }]
};
export const storeState = {
    filters: {
        showUnDone: true,
        content: 'fakeContent',
        priorities: ['2'],
        selectedTags: ['fakeTag']
    },
    shownItem: {
        id: null,
        title: '',
        description: '',
        priority: 2,
        tags: ''
    },
    list: ['fake', 'list',  'content']
};

/*ListPanel/components section*/
export const fakeItemMock = {
    id: 1000,
    title: 'fakeTitle',
    description: 'fakeDescription',
    priority: '2',
    tags: ['fakeTag1', 'fakeTag2', 'fakeTag3', 'fakeTag4'],
    isDone: false
};


