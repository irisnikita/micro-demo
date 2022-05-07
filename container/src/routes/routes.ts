import React, { lazy } from 'react'
import { adminLevels } from '@/utility/enum'

const Page = React.lazy(() => import('@/pages'))
const Test = React.lazy(() => import('@/pages/test'))
// const Login = React.lazy(() => import('@/pages/login'))

const routes: any[] = [
	{
		path: '/',
		component: Test,
		accessLevel: adminLevels.BASIC,
	},
	{
		path: '/default',
		component: Page,
		accessLevel: adminLevels.BASIC,
	},
	{
		path: '/test',
		component: Test,
		accessLevel: adminLevels.ADVANCE,
	},
	{
		path: '/test/*',
		component: Test,
		accessLevel: adminLevels.ADVANCE,
	},
	{
		path: '/test/:id',
		component: lazy(() => import('@/pages/testId')),
		accessLevel: adminLevels.NORMAL,
	},
	// {
	// 	path: '/login',
	// 	component: Login,
	// 	accessLevel: adminLevels.BASIC,
	// ,
]

export default routes
