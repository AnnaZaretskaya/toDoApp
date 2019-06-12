
/*Filters section*/
const emptyFilters = {
    showUnDone: false,
    content: '',
    priorities: [],
    selectedTags: []
};

const listFilled = [{
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
    tags: ['fakeTag5', 'fakeTag2', 'fakeTag2', 'fakeTag8'],
    isDone: false
}, {
    id: 1010,
    title: 'fakeTitle3',
    description: 'fakeDescription3',
    priority: '2',
    tags: ['fakeTag9', 'fakeTag3', 'fakeTag11', 'fakeTag19'],
    isDone: true
}, {
    id: 1001,
    title: 'fakeTitle4 and fakeTitle5',
    description: 'fakeDescription4',
    priority: '3',
    tags: ['fakeTag19', 'fakeTag14', 'fakeTag15', 'fakeTag16'],
    isDone: true
}, {
    id: 2000,
    title: 'fakeTitle5 ',
    description: 'fakeDescription5',
    priority: '2',
    tags: ['fakeTag17', 'fakeTag18', 'fakeTag19', 'fakeTag20'],
    isDone: false
}];

export const storeState = {
    mock1: {
        filters: Object.assign({}, emptyFilters, { showUnDone: true }),
        list: [].concat(listFilled),
    },
    mock2: {
        filters: Object.assign({}, emptyFilters, { showUnDone: true, content: 'fakeTitle5' }),
        list: [].concat(listFilled),
    },
    mock3: {
        filters: Object.assign({}, emptyFilters, { priorities: [1, 3] }),
        list: [].concat(listFilled),
    },
    mock4: {
        filters: Object.assign({}, emptyFilters, { selectedTags: ['fakeTag2', 'fakeTag19'] }),
        list: [].concat(listFilled),
    }
};

/*Filters.actions section*/
export const mockActionFilterIncome = {
    fakeChange: 'fakeChange',
};

export const mockActionAddEditPanelOutcome = {
    result1: {
        type: 'FILTER',
        change: 'fakeChange'
    }
};

/*Filters/component section*/
export const fakeEvent = {
    mock1: {
        currentTarget: {
            value: '2'
        }
    },
    mock2: {
        currentTarget: {
            value: '3'
        }
    },
    mock3: {
        currentTarget: {
            checked: true
        }
    }
};
export const fakeProps = {
    mock1: {
        value: ['1', '3'],
        onChange: jest.fn()
    },
    mock2: {
        onChange: jest.fn()
    }
};
export const handleChangeOutput = {
    result1: {
        priorities: ['1', '3', '2']
    },
    result2: {
        priorities: ['1']
    },
    result3: {
        showUnDone: true
    }
};