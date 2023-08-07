import {GET_TOPRATED_ERROR,GET_TOPRATED_PENDING,GET_TOPRATED_SUCCESS} from '../actiontypes/TopRatedActionTypes'

const initialState = {
    topRatedList: [],
    error : '',
    isLoading:false,
}

const topRatedReducer = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_TOPRATED_PENDING:
            return {
                ...state,
                isLoading:true,
            }
        case GET_TOPRATED_SUCCESS:
            return {
                ...state,
                topRatedList: action.data,
                isLoading:false,
            };
        case GET_TOPRATED_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading:false,
            }
        default:
            return state;
    }
}

export default topRatedReducer;