import React from 'react'
import { FlexDiv, StyledHeader } from './styles'
import Logo from '@assets/images/logo_vuivui.svg'
import BreadCrumb from './breadcrumb'
import Profile from './profile'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<FlexDiv>
				<Link to={'/'}>
					<img src={Logo} alt='' style={{ marginRight: '10px', width: 39, height: 39 }} />
				</Link>
				<BreadCrumb />
			</FlexDiv>
			<Profile />
		</StyledHeader>
	)
}

export default Header
