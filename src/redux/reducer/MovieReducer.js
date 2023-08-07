import {GET_MOVIE_ERROR,GET_MOVIE_PENDING,GET_MOVIE_SUCCESS} from '../actiontypes/MovieDetail'

const initialState = {
    movie: {},
    error : '',
    isLoading:false,
}

const movieReducer = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_MOVIE_PENDING:
            return {
                ...state,
                isLoading:true,
            }
        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                movie: action.data,
                isLoading:false,
            };
        case GET_MOVIE_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading:false,
            }
        default:
            return state;
    }
}

export default movieReducer;