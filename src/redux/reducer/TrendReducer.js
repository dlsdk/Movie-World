import {GET_TREND_ERROR, GET_TREND_PENDING, GET_TREND_SUCCESS} from '../actiontypes/TrendingActionTypes'

const initialState = {
    trendList: [],
    error : '',
    isLoad: false,
}

const trendReducer = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_TREND_PENDING:
            return {
                ...state,
                isLoad: true,
            }
        case GET_TREND_SUCCESS:
            return {
                ...state,
                trendList: action.data,
                isLoad: false,
            };
        case GET_TREND_ERROR:
            return {
                ...state,
                error: action.error,
                isLoad: false,
            }
        default:
            return state;
    }
}

export default trendReducer;