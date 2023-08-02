import {GET_TOPRATED_ERROR,GET_TOPRATED_PENDING,GET_TOPRATED_SUCCESS} from '../actiontypes/TopRatedActionTypes'
import axios from "axios";
import { options } from "../../helpers";


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
    axios.get("https://api.themoviedb.org/3/movie/top_rated",options).then((response) => 
    {
        console.log(response.data.results);
        dispatch(getTopRatedSuccess(response.data.results))

    }
    ).catch(error => {
        dispatch(getTopRatedError(error))
     })
 }
 

const topRatedActions = {getTopRated};
export default topRatedActions;


