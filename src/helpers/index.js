const getUserWithUname = (users,uname) => {
   return users.find(user => user.uname === uname)
}
const getUserWithId = (users,id) => {
    return users.find(user => user.id === id)
 }
 

const helperFunctions = {
    getUserWithUname,getUserWithId
}

export default helperFunctions;