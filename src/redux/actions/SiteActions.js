import ActionTypes from "../actiontypes"

const {siteActionTypes: {ADD_USER, DELETE_USER}} = ActionTypes

export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

const SiteActions = {
    deleteUser, addUser
};

export default SiteActions;