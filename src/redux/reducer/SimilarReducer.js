import {GET_SIMILAR_ERROR,GET_SIMILAR_PENDING,GET_SIMILAR_SUCCESS} from '../actiontypes/SimilarActionTypes'

const initialState = {
    similarList: [],
    error : '',
    isLoading:false,
}

const similarReducer = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_SIMILAR_PENDING:
            return {
                ...state,
                isLoading:true,
            }
        case GET_SIMILAR_SUCCESS:
            return {
                ...state,
                similarList: action.data,
                isLoading:false,
            };
        case GET_SIMILAR_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading:false,
            }
        default:
            return state;
    }
}

export default similarReducer;