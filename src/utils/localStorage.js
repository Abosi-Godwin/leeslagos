export const setItem = (key, value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error(e.message);
        throw new Error(e);
    }
};

export const getItem = key => {

    try {
        const lists = JSON.parse(window.localStorage.getItem(key));
        return lists;
    } catch (e) {
        console.error(e.message);
    }
};
