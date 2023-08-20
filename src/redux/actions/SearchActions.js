import {SEARCH_ERROR,SEARCH_PENDING,SEARCH_SUCCESS} from 'redux/actiontypes/SearchActionTypes'
import { getDataArray } from 'services/getData';


const getSearchError = (error) => {
   return {
        type: SEARCH_ERROR,
        error
    } 
}

const getSearchPending = () => {
    return {
        type: SEARCH_PENDING,
    }
}

const getSearchSuccess = (data) => {
    return {
        type: SEARCH_SUCCESS,
        data
    }
}


const getFromSearch = (query) => dispatch => {
    dispatch(getSearchPending());
    getDataArray(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`)
    .then((data) => {
        dispatch(getSearchSuccess(data));
    }
    ).catch(error => {
        dispatch(getSearchError(error))
     })
 }
 

const searchActions = {getFromSearch};
export default searchActions;