import React from 'react'
import { Link } from 'react-router-dom'

import Header from 'Header/header'
import Products from 'Products/App'

const Page: React.FC = () => {
	return (
		<div>
			{/* <Header /> */}
			<Products />
			Admin center test page
			<Link to={'/test/3'}> id</Link>
		</div>
	)
}

export default Page
