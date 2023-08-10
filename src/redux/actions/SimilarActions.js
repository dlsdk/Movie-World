import {GET_SIMILAR_PENDING, GET_SIMILAR_SUCCESS, GET_SIMILAR_ERROR} from '../actiontypes/SimilarActionTypes'
import axios from "axios";
import { options } from "../../helpers";

const getSimilarError = (error) => {
   return {
        type: GET_SIMILAR_ERROR,
        error
    } 
}

const getSimilarPending = () => {
    return {
        type: GET_SIMILAR_PENDING,
    }
}

const getSimilarSuccess = (data) => {
    return {
        type: GET_SIMILAR_SUCCESS,
        data
    }
}


const getSimilarMovies = (movie_id) => dispatch => {
    dispatch(getSimilarPending());
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?language=en-US&page=1`,options).then((response) => {
        dispatch(getSimilarSuccess(response.data.results))
    }
    ).catch(error => {
        dispatch(getSimilarError(error))
     })
 }
 

const similarActions = {getSimilarMovies};
export default similarActions;

