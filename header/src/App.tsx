import React, { Fragment } from 'react'
import ProtectedRoutes from '@/routes/ProtectedRoutes'
import PrivateRoute from '@/routes/PrivateRoute'
import { Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
	return (
		<Fragment>
			<Routes>
				<Route
					path='*'
					element={
						<PrivateRoute>
							<ProtectedRoutes />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Fragment>
	)
}

export default App
