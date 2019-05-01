import React, { Fragment } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  // 根据props是否用primary来设置颜色和背景颜色
    background: ${props => props.primary ? 'palevioletred' : 'white'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;
const PropsCom = ()=>(
	<Fragment>
		<Button>沒傳 Props</Button>
		<Button primary>有傳 Props</Button>
	</Fragment>
);

export default PropsCom;