import {GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR} from '../actiontypes/MovieDetail'
import axios from "axios";
import { options } from "../../helpers";

const getMovieError = (error) => {
   return {
        type: GET_MOVIE_ERROR,
        error
    } 
}

const getMoviePending = () => {
    return {
        type: GET_MOVIE_PENDING,
    }
}

const getMovieSuccess = (data) => {
    return {
        type: GET_MOVIE_SUCCESS,
        data
    }
}


const getMovie = (movie_id) => dispatch => {
    dispatch(getMoviePending());
    console.log(movie_id)
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,options).then((response) => {
        console.log("Data : ",response.data)
        dispatch(getMovieSuccess(response.data))
    }
    ).catch(error => {
        dispatch(getMovieError(error))
     })
 }
 

const movieActions = {getMovie};
export default movieActions;

