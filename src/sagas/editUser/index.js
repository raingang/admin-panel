import { fork, takeLatest, call, put } from 'redux-saga/effects';

import { editUser, setUser } from '../../actions';
import { updateUser } from '../../api';

export default function*  editUserSaga() {
	yield fork(editUserWatcher);
}

function* editUserWatcher() {
	yield takeLatest('HANDLE_EDIT_USER', editUserWorker);
}

function* editUserWorker({ payload }) {
	yield call(updateUser, payload);
	yield put(editUser(payload));
	yield put(setUser(payload));
}

