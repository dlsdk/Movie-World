import {GET_POPULAR_PENDING, GET_POPULAR_SUCCESS, GET_POPULAR_ERROR} from '../actiontypes/PopularActionsTypes'

const initialState = {
    popularList: [],
    error : '',
    isLoading:false,
}

const popularReducer = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_POPULAR_PENDING:
            return {
                ...state,
                isLoading:true,
            }
        case GET_POPULAR_SUCCESS:
            return {
                ...state,
                popularList: action.data,
                isLoading:false,
            };
        case GET_POPULAR_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading:false,
            }
        default:
            return state;
    }
}

export default popularReducer;