const stringCompare = (a, b) => {
    return a.toUpperCase() > b.toUpperCase() ? 1 : a.toUpperCase() < b.toUpperCase() ? -1 : 0;
};

export { stringCompare };
