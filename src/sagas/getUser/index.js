import { fork, takeLatest, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { setUser } from '../../actions';
import { getUser } from '../../api';

export default function*  getUserSaga() {
    yield fork(getUserWatcher);
}

function* getUserWatcher() {
    yield takeLatest('GET_USER', getUserWorker);
}

function* getUserWorker(action) {
    const user = yield call(getUser, action.payload.id);
    yield delay(1000);
    yield put(setUser(user));
}
