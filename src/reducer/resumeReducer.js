import {
    LOADING_GET_DATA,
    GET_DATA_SUCESS,
    GET_DATA_FAIL
} from '../actions/constant';

export const initialState = {
    loading: false,
    dataResume: [],
    error: null
}

const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_GET_DATA:
            return {
                ...state,
                ...{
                    loading: action.loading
                }
            }
        case GET_DATA_SUCESS:
            return {
                ...state,
                ...{
                    loading: false,
                    dataResume: action.data,
                    error: null
                }
            }
        case GET_DATA_FAIL:
            return {
                ...state,
                ...{
                    loading: false,
                    error: action.error,
                    dataResume: []
                }
            }
        default:
            return state;
    }
}

export default resumeReducer;