import {createSelector} from "reselect"

const selectTrend = (state) => state.trendReducer;

export const selectTrendList = createSelector(
    [selectTrend],
    (val) => val.trendList
)
