import { fork } from 'redux-saga/effects';

import getUsersSaga from './getUsers';
import deleteUserSaga from './deleteUser';
import getUserSaga from './getUser';

export default function* rootSaga() {
    yield fork(getUsersSaga);
    yield fork(deleteUserSaga);
    yield fork(getUserSaga);
}