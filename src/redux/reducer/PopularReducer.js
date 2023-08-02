import {GET_POPULAR_PENDING, GET_POPULAR_SUCCESS, GET_POPULAR_ERROR} from '../actiontypes/PopularActionsTypes'

const initialState = {
    popularList: [],
    error : '',
    isLoad: false,
}

const popularReducer = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_POPULAR_PENDING:
            return {
                ...state,
                isLoad: true,
            }
        case GET_POPULAR_SUCCESS:
            return {
                ...state,
                popularList: action.data,
                isLoad: false,
            };
        case GET_POPULAR_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            }
        default:
            return state;
    }
}

export default popularReducer;