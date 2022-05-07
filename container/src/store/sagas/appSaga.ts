import { PayloadAction } from '@reduxjs/toolkit'
import { takeLatest } from 'redux-saga/effects'
import { appActions } from '../reducers/appSlice'

function* increment(action: PayloadAction) {
	// yield put(appActions.increment())
}

export default function* appSaga() {
	yield takeLatest(appActions.increment, increment)
}
