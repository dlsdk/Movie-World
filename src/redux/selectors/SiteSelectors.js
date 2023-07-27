import {createSelector} from "reselect"

const selectSite = (state) => state.SiteReducer;

export const selectUsers = createSelector(
    [selectSite],
    (site) => Object.values(site.users)
)

export const selectNumberOfUsers = createSelector(
    [selectSite],
    (site) => Object.keys(site.users).length
)

export const selectCurrentUser = createSelector(
    [selectSite],
    (site) => site.currentUser
)