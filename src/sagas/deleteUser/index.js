import { fork, takeLatest, call, put } from 'redux-saga/effects';

import { deleteUser as deleteUserAction } from '../../actions';
import { deleteUser } from '../../api';

export default function* deleteUserSaga() {
  yield fork(deleteUserWatcher);
}

function* deleteUserWatcher() {
  yield takeLatest('HANDLE_DELETE', deleteUserWorker);
}

function* deleteUserWorker({ payload }) {
  yield call(deleteUser, payload.id);
  yield put(deleteUserAction(payload.id));
}

