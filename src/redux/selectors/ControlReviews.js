import {createSelector} from "reselect"

const selectControl = (state) => state.controlReviewReducer;

export const selectControlReviews = createSelector(
    [selectControl],
    (val) => Object.values(val.reviews)
)