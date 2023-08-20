import {GET_TOPRATED_ERROR,GET_TOPRATED_PENDING,GET_TOPRATED_SUCCESS} from '../actiontypes/TopRatedActionTypes'
import { getDataArray } from 'services/getData';


const getTopRatedError = (error) => {
   return {
        type: GET_TOPRATED_ERROR,
        error
    } 
}

const getTopRatedPending = () => {
    return {
        type: GET_TOPRATED_PENDING,
    }
}

const getTopRatedSuccess = (data) => {
    return {
        type: GET_TOPRATED_SUCCESS,
        data
    }
}

const getTopRated = () => dispatch => {
    dispatch(getTopRatedPending());
    getDataArray("https://api.themoviedb.org/3/movie/top_rated")
    .then((data) => {
        dispatch(getTopRatedSuccess(data))
    }
    ).catch(error => {
        dispatch(getTopRatedError(error))
     })
 }
 

const topRatedActions = {getTopRated};
export default topRatedActions;


