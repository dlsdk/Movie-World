import {GET_REVIEWS_PENDING,GET_REVIEWS_ERROR,GET_REVIEWS_SUCCESS,UPDATE_REVIEWS} from '../actiontypes/ReviewsActionTypes'

const initialState = {
    reviewsList: [],
    error : '',
    isLoading:false,
}

const reviewsReducer = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_REVIEWS_PENDING:
            return {
                ...state,
                isLoading:true,
            }
        case GET_REVIEWS_SUCCESS:
            return {
                ...state,
                reviewsList: action.data,
                isLoading:false,
            };
        case GET_REVIEWS_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading:false,
            }
        case UPDATE_REVIEWS:
            return {
                ...state,
                reviewsList: action.data,
                isLoading:false
            }
        default:
            return state;
    }
}

export default reviewsReducer;