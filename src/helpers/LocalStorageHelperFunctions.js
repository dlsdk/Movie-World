const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
const getAllLocalStorageValues = () => {
    return Object.values(localStorage).map(JSON.parse);
}

const localStorageHelperFunctions = {
    getFromLocalStorage, getAllLocalStorageValues
}

export default localStorageHelperFunctions;