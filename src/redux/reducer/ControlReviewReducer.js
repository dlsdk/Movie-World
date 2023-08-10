import {ADD_REVIEW,DELETE_REVIEW} from '../actiontypes/ControlReviewActionTypes'

const initialState = {
    reviews: {

    }
};

const controlReviewReducer = (state=initialState,action) =>{
    switch (action.type) {
        case ADD_REVIEW:
          return {
            ...state,
            reviews : {...state.reviews, [action.data.id]:{...action.data}},
          }
        case DELETE_REVIEW:
          const newReviews = {...state.reviews};
          delete newReviews[action.data.id]
          return {
            ...state,
            reviews: newReviews
          };
        default:
          {
            return state;
          }
          
      }
}
export default controlReviewReducer;