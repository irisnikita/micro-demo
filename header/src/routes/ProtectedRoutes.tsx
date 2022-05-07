import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import localRoutes from './routes'
// import remoteRoutesProfile from 'profile/routes'
const routes = [...localRoutes]

const ProtectedRoutes = () => (
	<Suspense fallback={<div>Loading ....</div>}>
		<Routes>
			{routes.map(({ component: Component, path }) => (
				<Route path={path} key={path} element={<Component />} />
			))}
		</Routes>
	</Suspense>
)

export default ProtectedRoutes
