import {GET_REVIEWS_PENDING, GET_REVIEWS_SUCCESS, GET_REVIEWS_ERROR} from '../actiontypes/ReviewsActionTypes'
import axios from "axios";
import { options } from "../../helpers";

const getReviewsError = (error) => {
   return {
        type: GET_REVIEWS_ERROR,
        error
    } 
}

const getReviewsPending = () => {
    return {
        type: GET_REVIEWS_PENDING,
    }
}

const getReviewsSuccess = (data) => {
    return {
        type: GET_REVIEWS_SUCCESS,
        data
    }
}


const getReviews = (movie_id) => dispatch => {
    dispatch(getReviewsPending());
    console.log(movie_id)
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`,options).then((response) => {
        console.log("Data : ",response.data.results)
        dispatch(getReviewsSuccess(response.data.results))
    }
    ).catch(error => {
        dispatch(getReviewsError(error))
     })
 }
 

const reviewsActions = {getReviews};
export default reviewsActions;

