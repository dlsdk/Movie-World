import {createSelector} from "reselect"

const selectTrend = (state) => state.trendReducer;

export const selectTrendList = createSelector(
    [selectTrend],
    (val) => val.trendList
)
/*
export const selectNumberOfUsers = createSelector(
    [selectPopular],
    (site) => Object.keys(site.users).length
)

export const selectCurrentUser = createSelector(
    [selectPopular],
    (site) => site.currentUser
)*/