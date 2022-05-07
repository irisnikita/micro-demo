import React from 'react'
import { StyledBreadCrumb } from '../styles'
import ActiveArrow from '@assets/images/icons/chevron-right-202020.svg'
import InactiveArrow from '@assets/images/icons/chevron-right-6E6E70.svg'

const BreadCrumb: React.FC = () => {
	const arr = ['Quản lý shop', 'Tạo link giới thiệu shop', 'tạo link']

	return (
		<>
			{arr.map((item: string, index: number) => (
				<StyledBreadCrumb key={index} color={index === arr.length - 1 ? '#333' : '#6E6E70'}>
					{index > 0 && (
						<img src={index === arr.length - 1 ? ActiveArrow : InactiveArrow} style={{ marginLeft: '15px' }} />
					)}
					{item}
				</StyledBreadCrumb>
			))}
		</>
	)
}

export default BreadCrumb
