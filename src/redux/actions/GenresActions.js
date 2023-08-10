import {GET_GENRES_ERROR,GET_GENRES_PENDING,GET_GENRES_SUCCESS} from '../actiontypes/GenreActionTypes'

import axios from "axios";
import { options } from "../../helpers";

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
    axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en',options).then((response) => {
        dispatch(getGenresSuccess(response.data.genres))
    }
    ).catch(error => {
        dispatch(getGenresError(error))
     })
 }
 

const genresActions = {getGenres};
export default genresActions;
