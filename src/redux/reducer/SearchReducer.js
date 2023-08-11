import {SEARCH_ERROR,SEARCH_PENDING,SEARCH_SUCCESS} from '../actiontypes/SearchActionTypes'

const initialState = {
    searchList: [],
    error : '',
    isLoading:false,
}

const searchReducer = (state=initialState,action) => {

    switch(action.type)
    {
        case SEARCH_PENDING:
            return {
                ...state,
                isLoading:true,
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                searchList: action.data,
                isLoading:false,
            };
        case SEARCH_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading:false,
            }
        default:
            return state;
    }
}

export default searchReducer;