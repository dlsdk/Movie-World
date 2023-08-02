import {createSelector} from "reselect"

const selectGenres = (state) => state.genresReducer;

export const selectGenresList = createSelector(
    [selectGenres],
    (val) => val.genresList,
)