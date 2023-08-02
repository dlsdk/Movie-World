import {createSelector} from "reselect"

const selectTopRated = (state) => state.topRatedReducer;

export const selectTopRatedList = createSelector(
    [selectTopRated],
    (val) => val.topRatedList
)


export const selectTopRatedMost = createSelector(
    [selectTopRated],
    (val) => val.topRatedList[0]
)