import ActionTypes from "../actiontypes"

const {siteActionTypes: {ADD_USER, DELETE_USER,SET_CURRENT_USER,DELETE_CURRENT_USER}} = ActionTypes

export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}

export const deleteUser = (payload) => {
    return {
        type: DELETE_USER,
        payload
    }
}

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user
    }
}
export const deleteCurrentUser = () => {
    return {
        type: DELETE_CURRENT_USER,
    }
}

const SiteActions = {
    deleteUser, addUser, setCurrentUser, deleteCurrentUser
};

export default SiteActions;