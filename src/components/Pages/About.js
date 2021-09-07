import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`;

const H1 = styled.h1`
	color: seagreen;
`;

export const About = () => {
return (
	<AboutWrapper>
	<H1>Shoppaholix in your face baby !</H1>
	</AboutWrapper>
)
}


