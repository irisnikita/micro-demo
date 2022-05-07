import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { adminLevels } from './enum'
export const isServer = typeof window !== 'undefined'

export const getCookie = (key: string) => (isServer ? Cookies.get(key) : null)

export const setCookie = (key: string, token: any, expires = 10000) => {
	return isServer && token ? Cookies.set(key, token, { expires }) : null
}

export const deleteCookie = (key: string) => Cookies.remove(key)

interface DecodedToken {
	roles: string[]
	scope: string[]
	exp: number
}

const roleAdmin = 'admin'

export const handleToken = (token: string) => {
	let isAuthenticated = false
	let level = adminLevels.BASIC

	if (token) {
		const decodedToken: DecodedToken = jwtDecode(token)
		if (decodedToken) {
			const isAdmin = decodedToken.roles.includes(roleAdmin)
			const isExpired = decodedToken.exp < Date.now() / 1000

			if (isAdmin && !isExpired) {
				isAuthenticated = true
				level = adminLevels.NORMAL
			}
		}
	}

	return { isAuthenticated, level }
}
