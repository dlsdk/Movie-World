import {GET_TREND_ERROR, GET_TREND_PENDING, GET_TREND_SUCCESS} from '../actiontypes/TrendingActionTypes'

const initialState = {
    trendList: [],
    error : '',
    isLoading:false,
}

const trendReducer = (state=initialState,action) => {

    switch(action.type)
    {
        case GET_TREND_PENDING:
            return {
                ...state,
                isLoading:true,
            }
        case GET_TREND_SUCCESS:
            return {
                ...state,
                trendList: action.data,
                isLoading:false,
            };
        case GET_TREND_ERROR:
            return {
                ...state,
                error: action.error,
                isLoading:false,
            }
        default:
            return state;
    }
}

export default trendReducer;