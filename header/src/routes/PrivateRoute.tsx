import { Navigate } from 'react-router-dom'

export type PrivateRouteProps = {
	children: React.ReactElement
	isAuthenticated?: boolean
}

const PrivateRoute = ({ children, isAuthenticated = true }: PrivateRouteProps) => {
	return isAuthenticated ? children : <Navigate to='/login' />
}

export default PrivateRoute
