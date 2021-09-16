import React from 'react';
import styled from 'styled-components';
import { Properties } from './Properties';
import { States } from './States';


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
		<Properties name = 'joan' age = '25' village='miro 8'>
			<p>Nut her already</p>
		</Properties>
		<States />
	</AboutWrapper>
)
}


