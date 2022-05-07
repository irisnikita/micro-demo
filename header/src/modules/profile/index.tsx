import React from 'react'
import { FlexDiv } from '../styles'
import Bell from '@assets/images/icons/bell.svg'
import { Badge, Avatar } from 'antd'

const Profile: React.FC = () => {
	return (
		<FlexDiv style={{ gap: '20px', justifyContent: 'flex-end', alignItems: 'center' }}>
			<Badge count={5} size={'small'}>
				<img src={Bell} alt='' style={{ width: '16px', height: '16px' }} />
			</Badge>
			<Avatar size={30}>H</Avatar>
			Hiếu Lê
		</FlexDiv>
	)
}

export default Profile
