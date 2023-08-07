import {GET_GENRES_ERROR,GET_GENRES_PENDING,GET_GENRES_SUCCESS} from '../actiontypes/GenreActionTypes'

const initialState = {
    genresList: [],
    error : '',
    isLoading:false,
}

const genresReducer = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_GENRES_PENDING:
            return {
                ...state,
                isLoading:true,
            }
        case GET_GENRES_SUCCESS:
            return {
                ...state,
                genresList: action.data,
                isLoading:false,
            };
        case GET_GENRES_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading:false,
            }
        default:
            return state;
    }
}

export default genresReducer;