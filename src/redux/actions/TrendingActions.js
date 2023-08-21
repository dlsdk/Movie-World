import {GET_TREND_ERROR, GET_TREND_PENDING, GET_TREND_SUCCESS} from 'redux/actiontypes/TrendingActionTypes'
import { getDataArray } from 'services/getData';

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
    getDataArray('https://api.themoviedb.org/3/trending/movie/day')
    .then((data) => {
        dispatch(getTrendSuccess(data))
    }
    ).catch(error => {
        dispatch(getTrendError(error))
     })
 }
 

const trendActions = {getTrend};
export default trendActions;

