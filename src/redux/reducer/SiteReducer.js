import ActionTypes from "../actiontypes"

const {siteActionTypes: {ADD_USER,DELETE_USER,SET_CURRENT_USER,DELETE_CURRENT_USER}} = ActionTypes

const initialState = {
    users: {
    },
    currentUser: {},
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
            delete newUsers[action.payload.id];
            return {
                ...state,
                users: newUsers,
            }
        case SET_CURRENT_USER: 
            return {
               ...state,
               currentUser: {[action.user.id]:{...action.user}} 
            }
        case DELETE_CURRENT_USER: 
            return {
               ...state,
               currentUser: {} 
            }
        default:
            return state;
    }
}

export default SiteReducer;