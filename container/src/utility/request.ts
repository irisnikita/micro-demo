import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { deleteCookie, getCookie, setCookie } from '@/utility'
import { TOKEN_KEY, WEB_TOKEN_KEY, VV__APP_SIGNATURE, VV_APP_ID } from './constants'
import { v4 as uuid } from 'uuid'

enum REQUEST_TIMEOUT {
	default = 10000,
}

const request = axios.create({
	baseURL: 'https://testapi.vuivui.com/api/v1',
	timeout: REQUEST_TIMEOUT.default,
})

let appId = getCookie(VV_APP_ID) ?? ''

let vvSign = getCookie(VV__APP_SIGNATURE) ?? ''

if (!appId && !vvSign) {
	appId = uuid()

	vvSign = uuid()
	setCookie(VV_APP_ID, appId, 10000)
	setCookie(VV__APP_SIGNATURE, vvSign, 10000)
}

request.interceptors.request.use(
	async (config: AxiosRequestConfig) => {
		let token = getCookie(TOKEN_KEY)

		let webToken = getCookie(WEB_TOKEN_KEY)

		if (token && webToken) {
			config.headers = {
				...config.headers,
				['vv-desktop-webtoken']: webToken,
				['Authorization']: `Bearer ${token}`,
			}
		} else {
			config.headers = {
				...config.headers,
				[VV_APP_ID]: appId,
				[VV__APP_SIGNATURE]: vvSign,
			}
		}

		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

request.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response && response.data) {
			return response.data
		}

		return response
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default request
