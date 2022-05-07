import React, { Fragment } from 'react'
import ProtectedRoutes from '@/routes/ProtectedRoutes'
import PrivateRoute from '@/routes/PrivateRoute'
import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { isAuthenticatedSelector, levelSelector } from '@/store/reducers/authSlice'
import { useAppSelector } from './hooks'

const App: React.FC = () => {
	const isAuthenticated = useAppSelector(isAuthenticatedSelector)
	const level = useAppSelector(levelSelector)

	return (
		<Fragment>
			<Routes>
				<Route path='/login' element={<Login isAuthenticated={isAuthenticated} />} />
				<Route
					path='*'
					element={
						<PrivateRoute isAuthenticated={true}>
							<ProtectedRoutes adminLevel={level} />
						</PrivateRoute>
					}
				/>
			</Routes>
			<ToastContainer />
		</Fragment>
	)
}

export default App
