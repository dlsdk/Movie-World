import {GET_POPULAR_PENDING, GET_POPULAR_SUCCESS, GET_POPULAR_ERROR} from 'redux/actiontypes/PopularActionsTypes'
import { getDataArray } from 'services/getData';

const getPopularError = (error) => {
   return {
        type: GET_POPULAR_ERROR,
        error
    } 
}

const getPopularPending = () => {
    return {
        type: GET_POPULAR_PENDING,
    }
}

const getPopularSuccess = (data) => {
    return {
        type: GET_POPULAR_SUCCESS,
        data
    }
}

const getPopular = () => dispatch => {
    dispatch(getPopularPending());
    getDataArray('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
    .then((data) => {
        dispatch(getPopularSuccess(data))
    }
    ).catch(error => {
        dispatch(getPopularError(error))
     })
 }
 

const popularActions = {getPopular};
export default popularActions;

