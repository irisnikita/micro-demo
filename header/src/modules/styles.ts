import styled from 'styled-components'

export const StyledHeader = styled.div`
	display: flex;
	width: 100%;
	padding: 15px 0px;
	border-bottom: 2px solid #d9e5e7;
`

export const FlexDiv = styled.div`
	display: flex;
	width: 100%;
	gap: ${(p) => p?.style?.gap}px;
`

export const StyledBreadCrumb = styled.p<{ color?: string }>`
	color: ${(p) => p?.color};
	white-space: nowrap;
	margin-bottom: 0;
	align-self: center;
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 27px;
	display: flex;
	gap: 15px;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		color: #444;
	}
`
