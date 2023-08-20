import {GET_GENRES_ERROR,GET_GENRES_PENDING,GET_GENRES_SUCCESS} from 'redux/actiontypes/GenreActionTypes'
import { getDataGenres } from 'services/getData';

const getGenresError = (error) => {
   return {
        type: GET_GENRES_ERROR,
        error
    } 
}

const getGenresPending = () => {
    return {
        type: GET_GENRES_PENDING,
    }
}

const getGenresSuccess = (data) => {
    return {
        type: GET_GENRES_SUCCESS,
        data
    }
}

const getGenres = () => dispatch => {
    dispatch(getGenresPending());
    getDataGenres()
    .then((data) => {
        dispatch(getGenresSuccess(data))
    }
    ).catch(error => {
        dispatch(getGenresError(error))
     })
 }
 

const genresActions = {getGenres};
export default genresActions;
