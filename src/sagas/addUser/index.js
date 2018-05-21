import { fork, takeLatest, call, put } from 'redux-saga/effects';

import { addUser } from '../../actions';
import { postUser } from '../../api';

export default function*  addUserSaga() {
  yield fork(addUserWatcher);
}

function* addUserWatcher() {
  yield takeLatest('HANDLE_ADD_USER', addUserWorker);
}

function* addUserWorker({ payload }) {
  yield call(postUser, payload);
  yield put(addUser(payload));
}

