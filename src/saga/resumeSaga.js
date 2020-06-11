//Saga effects
import { put, takeEvery, call } from 'redux-saga/effects';
import {GET_DATA} from '../actions/constant';
import {
    loadingGetData,
    getDataResumeSuccess,
    getDataResumeFail
} from '../actions/action';

import { api } from '../api/api';

function* getDataSaga() {
    try {
        yield put(loadingGetData(true));
        const dataResume = yield call(api.getDataResume);
        if(dataResume){
            yield put(getDataResumeSuccess(dataResume));
        } else {
            yield put(getDataResumeFail('error'));
        }
    } catch (err) {
        console.error(err);
    }
}

export function* watchGetDataSaga() {
    yield takeEvery(GET_DATA, getDataSaga);
}