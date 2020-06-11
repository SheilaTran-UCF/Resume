import {
    LOADING_GET_DATA,
    GET_DATA,
    GET_DATA_SUCESS,
    GET_DATA_FAIL
} from './constant';

export const loadingGetData = (loading) =>  ({
    type: LOADING_GET_DATA,
    loading,
})

export const getDataResume = () =>  ({
    type: GET_DATA,
})

export const getDataResumeSuccess = (data) => ({
    type: GET_DATA_SUCESS,
    data,
})

export const getDataResumeFail = (error) => ({
    type: GET_DATA_FAIL,
    error,
})