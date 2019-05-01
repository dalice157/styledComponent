import React, { Fragment } from 'react';
import styled, {keyframes} from 'styled-components';

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate360} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

const AnimationCom = ()=>(
	<Fragment>
	    <Rotate>我轉</Rotate>
	</Fragment>
);

export default AnimationCom;