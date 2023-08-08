import {createSelector} from "reselect"

const selectSimilar = (state) => state.similarReducer;

export const selectSimilarMovies = createSelector(
    [selectSimilar],
    (val) => val.similarList
)


export const selectSimilarPending = createSelector(
    [selectSimilar],
    (val) => val.isLoading
)
