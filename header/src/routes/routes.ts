import React from 'react'

const Page = React.lazy(() => import('@/pages/header'))

const routes: any[] = [
	{
		path: '/header',
		component: Page,
	},
]

export default routes
