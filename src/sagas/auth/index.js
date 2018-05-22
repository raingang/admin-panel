import { fork, takeLatest, call, put } from 'redux-saga/effects';

import { getAuth } from '../../api';

export default function*  authSaga() {
	yield fork(authWatcher);
}

function* authWatcher() {
	yield takeLatest('HANDLE_LOG_IN', authWorker);
}

function* authWorker({ payload }) {
	const response = yield call(getAuth, payload);
	if(response.length) {
		yield put( {type: 'LOG_IN'} );
	}
}

