export const applyFilters = (props) => {
    let filteredList = [...props.list];
    let filters = {...props.filters};

    filteredList = filtersContainer.applyShowUnDone(filteredList, filters);
    filteredList = filtersContainer.applyContentFilter(filteredList, filters);
    filteredList = filtersContainer.applyPrioritiesFilter(filteredList, filters);
    filteredList = filtersContainer.applyTagsFilter(filteredList, filters);

    return filteredList;
};

const filtersContainer = {
    applyShowUnDone: (list, filters) => {
        if (filters.showUnDone) {
            list = list.filter((item) => {
                return item.isDone === false;
            });
        }

        return list;
    },

    applyContentFilter: (list, filters) => {
        list = list.filter((item) => {
            return (item.title.includes(filters.content) || item.description.includes(filters.content))
        });

        return list;
    },

    applyPrioritiesFilter: (list, filters) => {
        if (filters.priorities.length) {
            list = list.filter((item) => {
                return filters.priorities.includes(item.priority)
            });
        }

        return list;
    },

    applyTagsFilter: (list, filters) => {
        if (filters.selectedTags.length) {
            list = list.filter((item) => {
                return filters.selectedTags.some((selectedTag) => {
                    return item.tags.includes(selectedTag);
                });
            });
        }

        return list;
    }
};