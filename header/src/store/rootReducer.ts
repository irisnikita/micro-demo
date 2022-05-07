import { combineReducers } from 'redux'
import app from './reducers/appSlice'
import { routerReducer } from './reducers/routerSlice'

const rootReducer = combineReducers({
	router: routerReducer,
	app,
})

export default rootReducer
