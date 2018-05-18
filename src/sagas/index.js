import { fork } from 'redux-saga/effects';

import getUsersSaga from './getUsers';

export default function* rootSaga() {
    yield fork(getUsersSaga);
}