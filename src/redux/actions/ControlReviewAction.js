import {ADD_REVIEW} from '../actiontypes/ControlReviewActionTypes'

const addReview = (data) => {
    return{
        type: ADD_REVIEW,
        data
    }
}

const controlReviewAction = {
    addReview,
}

export default controlReviewAction;