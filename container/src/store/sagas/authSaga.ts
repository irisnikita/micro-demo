import { put, fork } from 'redux-saga/effects'
import { authActions } from '../reducers/authSlice'
import { TOKEN_KEY, WEB_TOKEN_KEY } from '@/utility/constants'
import { getCookie, handleToken } from '@/utility'

function* loginWithToken() {
	const token = getCookie(TOKEN_KEY)
	const webToken = getCookie(WEB_TOKEN_KEY)

	if (token && webToken) {
		const { isAuthenticated, level } = handleToken(token)
		yield put(
			authActions.setAuthorization({
				isAuthenticated,
				level,
			})
		)
	}
}

export default function* authSaga() {
	yield fork(loginWithToken)
}
