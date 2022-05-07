import { all } from 'redux-saga/effects'
import appSaga from './sagas/appSaga'
import authSaga from './sagas/authSaga'

export default function* rootSaga() {
	yield all([appSaga(), authSaga()])
}
