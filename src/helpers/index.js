const getUserWithUname = (users,uname) => {
   return users.find(user => user.uname === uname)
}
const getUserWithId = (users,id) => {
    return users.find(user => user.id === id)
 }

const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
const getAllLocalStorageValues = () => {
    return Object.values(localStorage).map(JSON.parse);
}

const helperFunctions = {
    getUserWithUname,getUserWithId,getFromLocalStorage, getAllLocalStorageValues
}

export default helperFunctions;