import {createSelector} from "reselect"

const selectReviews = (state) => state.reviewsReducer;

export const selectReview = createSelector(
    [selectReviews],
    (val) => val.reviewsList
)

export const selectReviewPending = createSelector(
    [selectReviews],
    (val) => val.isLoading
)
