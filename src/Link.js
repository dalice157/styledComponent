import React, { Fragment } from 'react';
import styled from 'styled-components';

const Link = ({ className, children }) => (
	<a className={className} href="#">
			{children}
	</a>
)

// 將Link元件加上Style
const StyledLink = styled(Link)`
	color: palevioletred;
	font-weight: bold;
`;

const LinkCom = ()=>(
	<Fragment>
		<Link>原始連結</Link>
		<br />
		<StyledLink>加上Style的連結</StyledLink>
	</Fragment>
);

export default LinkCom;