import {createSelector} from "reselect"

const selectPopular = (state) => state.popularReducer;

export const selectPopularList = createSelector(
    [selectPopular],
    (val) => val.popularList,
)