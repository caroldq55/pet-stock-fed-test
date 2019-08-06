const selectors = (filter, list) => {
    if (!filter) {
        return list;
    }
    return list.filter((item) => {
        return item.category === filter;
    })
};

export default selectors;
