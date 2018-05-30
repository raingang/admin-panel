import { fork, takeLatest, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { setUsers } from '../../actions';
import { getUsers } from '../../api';

export default function* getUsersSaga() {
  yield fork(getUsersWatcher);
}

function* getUsersWatcher() {
  yield takeLatest('GET_USERS', getUsersWorker);
}

function* getUsersWorker({ payload }) {
  const users = yield call(() => getUsers(payload));
  yield delay(1000);
  yield put(setUsers(users));
}
