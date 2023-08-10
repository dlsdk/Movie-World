import {GET_TREND_ERROR, GET_TREND_PENDING, GET_TREND_SUCCESS} from '../actiontypes/TrendingActionTypes'
import axios from "axios";
import { options } from "../../helpers";

const getTrendError = (error) => {
   return {
        type: GET_TREND_ERROR,
        error
    } 
}

const getTrendPending = () => {
    return {
        type: GET_TREND_PENDING,
    }
}

const getTrendSuccess = (data) => {
    return {
        type: GET_TREND_SUCCESS,
        data
    }
}

const getTrend = () => dispatch => {
    dispatch(getTrendPending());
    axios.get('https://api.themoviedb.org/3/trending/movie/day',options).then((response) => {
        dispatch(getTrendSuccess(response.data.results))
    }
    ).catch(error => {
        dispatch(getTrendError(error))
     })
 }
 

const trendActions = {getTrend};
export default trendActions;

