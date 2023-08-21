import {createSelector} from "reselect"

const selectSearch = (state) => state.searchReducer;

export const selectsearchList = createSelector(
    [selectSearch],
    (val) => val.searchList,
)

export const selectSearchError = createSelector(
    [selectSearch],
    (val) => val.error,
)