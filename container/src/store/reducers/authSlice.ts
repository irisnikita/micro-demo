import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export interface AuthState {
	isAuthenticated: boolean
	level: number
}

const initialState: AuthState = {
	isAuthenticated: false,
	level: 0,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthorization(state, action: PayloadAction<{ isAuthenticated: boolean; level: number }>) {
			if (action.payload) {
				state.isAuthenticated = action.payload.isAuthenticated
				state.level = action.payload.level
			} else {
				state.isAuthenticated = false
				state.level = 0
			}
		},
	},
})

export const isAuthenticatedSelector = (state: RootState) => state.auth.isAuthenticated
export const levelSelector = (state: RootState) => state.auth.level

export const authActions = authSlice.actions

export default authSlice.reducer
