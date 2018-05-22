import { fork } from 'redux-saga/effects';

import getUsersSaga from './getUsers';
import deleteUserSaga from './deleteUser';
import getUserSaga from './getUser';
import addUserSaga from './addUser';
import editUserSaga from './editUser';
import authSaga from './auth';

export default function* rootSaga() {
    yield fork(getUsersSaga);
    yield fork(deleteUserSaga);
    yield fork(getUserSaga);
    yield fork(addUserSaga);
	yield fork(editUserSaga);
	yield fork(authSaga);
}
