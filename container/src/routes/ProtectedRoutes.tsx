import React, { Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import localRoutes from './routes'
import LayoutDefault from '@/layouts/defaultLayout'

// import remoteRoutesProfile from 'profile/routes'
const routes = [...localRoutes]

interface IProtectedRoutes {
	adminLevel: number
}

const ProtectedRoutes: React.FC<IProtectedRoutes> = ({ adminLevel }) => (
	<Suspense fallback={<div>Loading ....</div>}>
		<Routes>
			{routes.map(({ component: Component, path, accessLevel }) => {
				return (
					<Route
						path={path}
						key={path}
						element={
							<>
								<LayoutDefault>
									<Component />
								</LayoutDefault>
							</>
						}
					/>
				)
			})}
		</Routes>
	</Suspense>
)

export default ProtectedRoutes
