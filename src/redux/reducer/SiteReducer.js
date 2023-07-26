import ActionTypes from "../actiontypes"

const {siteActionTypes: {ADD_USER,DELETE_USER}} = ActionTypes

const initialState = {
    users: {
    },
}

const SiteReducer = (state=initialState,action) => {
    
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: {...state.users, [action.user.id]:{...action.user}}
        }
        case DELETE_USER:
            const newUsers = {...state.users};
            delete newUsers[action.user.id];
            return {
                ...state,
                users: newUsers,
            }
        default:
            return state;
    }
}

export default SiteReducer;