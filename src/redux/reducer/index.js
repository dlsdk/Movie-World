import SiteReducer from "./SiteReducer";
import popularReducer from "./PopularReducer";
import trendReducer from "./TrendReducer";
import topRatedReducer from "./TopRatedReducer";
import genresReducer from "./GenresReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    SiteReducer,
    popularReducer,
    trendReducer,
    topRatedReducer,
    genresReducer
});

export default reducers;