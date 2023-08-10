import SiteReducer from "./SiteReducer";
import popularReducer from "./PopularReducer";
import trendReducer from "./TrendReducer";
import topRatedReducer from "./TopRatedReducer";
import genresReducer from "./GenresReducer";
import reviewsReducer from "./ReviewsReducer";
import movieReducer from "./MovieReducer";
import similarReducer from "./SimilarReducer";
import controlReviewReducer from "./ControlReviewReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    SiteReducer,
    popularReducer,
    trendReducer,
    topRatedReducer,
    genresReducer,
    reviewsReducer,
    movieReducer,
    similarReducer,
    controlReviewReducer
});

export default reducers;