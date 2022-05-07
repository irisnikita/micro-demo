import React, { Suspense, useEffect } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

import { handleToken, setCookie } from '@/utility'
import { TOKEN_KEY, WEB_TOKEN_KEY } from '@/utility/constants'
import { ShowNotificationToast } from '@/utility/toastNotification'
import { ToastEnums } from '@/utility/enum'
import { useAppDispatch } from '@/hooks'
import { authActions } from '@/store/reducers/authSlice'

// const Login = React.lazy(() => import('login/login'))

interface Login {
	isAuthenticated: boolean
}

const LoginComponent: React.FC<Login> = () => {
	return <div>Login</div>
	// const dispatch = useAppDispatch()
	// const navigate = useNavigate()
	// const location = useLocation()

	// useEffect(() => {
	// 	if (isAuthenticated) {
	// 		navigate('/')
	// 	}
	// }, [isAuthenticated])

	// const onHandle = (response) => {
	// 	if (response.access_token && response.web_token && !response.error) {
	// 		const { isAuthenticated, level } = handleToken(response.access_token)

	// 		if (isAuthenticated) {
	// 			setCookie(TOKEN_KEY, response.access_token, 10000)
	// 			setCookie(WEB_TOKEN_KEY, response.web_token, 10000)
	// 			ShowNotificationToast({ type: ToastEnums.success, message: 'Đăng nhập thành công!' })
	// 			dispatch(
	// 				authActions.setAuthorization({
	// 					isAuthenticated,
	// 					level,
	// 				})
	// 			)

	// 			const from: any = location.state

	// 			if (from && from?.from?.pathname) {
	// 				navigate(from?.from?.pathname)
	// 			} else {
	// 				navigate('/', { replace: true })
	// 			}
	// 		} else {
	// 			ShowNotificationToast({ type: ToastEnums.error, message: 'Tên đăng nhập hoặc mật khẩu không đúng!' })
	// 		}
	// 	} else {
	// 		ShowNotificationToast({ type: ToastEnums.error, message: 'Tên đăng nhập hoặc mật khẩu không đúng!' })
	// 	}
	// }
	// return (
	// 	<Suspense fallback={<div>Loading ....</div>}>
	// 		<Login callback={onHandle} />
	// 	</Suspense>
	// )
}

export default LoginComponent
