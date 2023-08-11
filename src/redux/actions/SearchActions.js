import {SEARCH_ERROR,SEARCH_PENDING,SEARCH_SUCCESS} from '../actiontypes/SearchActionTypes'
import axios from "axios";
import { options } from "../../helpers";

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
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,options).then((response) => {
        dispatch(getSearchSuccess(response.data.results));
        console.log("searchten gelenler : ",response.data.results)
    }
    ).catch(error => {
        dispatch(getSearchError(error))
     })
 }
 

const searchActions = {getFromSearch};
export default searchActions;