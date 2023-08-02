import {GET_GENRES_ERROR,GET_GENRES_PENDING,GET_GENRES_SUCCESS} from '../actiontypes/GenreActionTypes'

const initialState = {
    genresList: [],
    error : '',
    isLoad: false,
}

const genresReducer = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_GENRES_PENDING:
            return {
                ...state,
                isLoad: true,
            }
        case GET_GENRES_SUCCESS:
            return {
                ...state,
                genresList: action.data,
                isLoad: false,
            };
        case GET_GENRES_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            }
        default:
            return state;
    }
}

export default genresReducer;