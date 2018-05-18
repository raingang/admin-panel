import { fork, takeLatest, call, put } from 'redux-saga/effects';

import { getUsers as getUsersAction, setUsers } from '../../actions';
import { getUsers } from '../../api';

export default function*  getUsersSaga() {
    yield fork(getUsersWatcher);
}

function* getUsersWatcher() {
    yield takeLatest('GET_USERS', getUsersWorker);
}

function* getUsersWorker() {
    const users = yield call(getUsers);
    yield put(setUsers(users));
}
