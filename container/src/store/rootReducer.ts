import { combineReducers } from 'redux'
import app from './reducers/appSlice'
import { routerReducer } from './reducers/routerSlice'
import auth from './reducers/authSlice'

const rootReducer = combineReducers({
	router: routerReducer,
	app,
	auth,
})

export default rootReducer
