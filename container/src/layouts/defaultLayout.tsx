// Libraries
import React, { Fragment, ReactNode, Suspense } from 'react'

// const Header = React.lazy(() => import('header/header'))
// const Sidebar = React.lazy(() => import('sidebar/sidebar'))

interface ILayout {
	children: ReactNode
}

const LayoutDefault: React.FC<ILayout> = ({ children }) => {
	return (
		<Fragment>
			<Suspense fallback={<div>Sidebar....</div>}>
				<div style={{ display: 'flex' }}>
					{/* <Sidebar /> */}
					<div style={{ width: '100%', padding: '0px 24px' }}>
						{/* <Header /> */}
						{children}
					</div>
				</div>
			</Suspense>
		</Fragment>
	)
}

export default LayoutDefault
