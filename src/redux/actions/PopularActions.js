import {GET_POPULAR_PENDING, GET_POPULAR_SUCCESS, GET_POPULAR_ERROR} from '../actiontypes/PopularActionsTypes'
import axios from "axios";
import { options } from "../../helpers";

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
    axios.get('https://api.themoviedb.org/3/person/popular',options).then((response) => {
        dispatch(getPopularSuccess(response.data.results))
    }
    ).catch(error => {
        dispatch(getPopularError(error))
     })
 }
 

const popularActions = {getPopular};
export default popularActions;

