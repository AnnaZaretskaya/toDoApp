export const makeUniqueTagList = (list) => {
    let allTags = [];
    let uniqueTagList = [];

    list.forEach((item) => {
        if (item.tags) {
            allTags = allTags.concat(item.tags)
        }
    });
    allTags.forEach(tag => {
        if (!uniqueTagList.includes(tag)) {
            uniqueTagList.push(tag);
        }
    });
    return uniqueTagList;
};