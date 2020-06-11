import { all, call } from 'redux-saga/effects';
import {watchGetDataSaga} from './resumeSaga';

export default function* rootSaga() {
    yield all([
        call(watchGetDataSaga)
    ])
}