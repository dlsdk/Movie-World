import {GET_MOVIE_PENDING, GET_MOVIE_SUCCESS, GET_MOVIE_ERROR} from 'redux/actiontypes/MovieDetail'
import {getData} from 'services/getData';


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
    getData(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`)
        .then(data => {
             dispatch(getMovieSuccess(data));
        })
        .catch(error => {
            dispatch(getMovieError(error));
        });
 }
 

const movieActions = {getMovie};
export default movieActions;

