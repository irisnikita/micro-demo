import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from '@/store/reducers/routerSlice'

import { history } from '@/utility/history'
import { store } from '@/store'

import 'antd/dist/antd.css'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
