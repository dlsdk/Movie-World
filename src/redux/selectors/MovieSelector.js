import {createSelector} from "reselect"

const selectMovies = (state) => state.movieReducer;

export const selectMovie = createSelector(
    [selectMovies],
    (val) => val.movie,
)