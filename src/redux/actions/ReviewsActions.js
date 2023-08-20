import {GET_REVIEWS_PENDING, GET_REVIEWS_SUCCESS, GET_REVIEWS_ERROR,UPDATE_REVIEWS} from 'redux/actiontypes/ReviewsActionTypes'
import { getDataArray } from 'services/getData';

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

const getUpdatedReviews = (data) => {
    return {
        type: UPDATE_REVIEWS,
        data
    }
}

const getReviews = (movie_id) => dispatch => {
    dispatch(getReviewsPending());
    getDataArray(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`)
    .then((data) => {
        dispatch(getReviewsSuccess(data))
    }
    ).catch(error => {
        dispatch(getReviewsError(error))
     })
 }
 

const reviewsActions = {getReviews,getUpdatedReviews};
export default reviewsActions;

