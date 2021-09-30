import React from 'react';
import styled from 'styled-components';
import Typewriter from "typewriter-effect";
import AboutImg from './PageImages/desk-gadget.jpg'
import { ExpandMore } from '@material-ui/icons';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@material-ui/core';
import { AboutBoxes } from '../AboutBoxes/AboutBoxes';


const AboutWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 1em;

`;

const Heading1 = styled.h1`
	color: seagreen;
	opacity: 0.7;
`;
const Heading3 = styled.h3`
	color: green;
	align-self: center;
	opacity: 0.6;
`;
// 




const AutoText = styled.div`
	text-align: center;
    position: absolute;
    top: 50%;
	left:50%;
	font-weight:bold;
	font-size: 1.5em;
	color:whitesmoke;
	text-shadow: 1px 1px 2px black;
	transform: translate(-50%, -50%);	
	
`;

const Image = styled.div`
	display: flex;
	flex-direction: column;
	background-image: linear-gradient( to top right,
         rgba(11, 10, 10, 0.38),
          rgba(11, 10, 10, 0.19)),
	url(${AboutImg});
	width:100%;
	height: 70vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;




const AboutMessage = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	margin: 5em;
	padding: 0;

`;


export const About = () => {
	return (
		<AboutWrapper>

			<Heading1>About Us Shoppaholix.</Heading1>
			<Image>
				<AutoText>
					<Typewriter
						textStyle={{
							display: 'flex',
							flexDirection: 'column',
						}}
						options={{
							strings: ['Welcome to Shoppahlix ...',
								'Shoppaholix is your number one source for all electronics.'],
							autoStart: true,
							loop: true,
							nextTextDelay: 1000,
							typeSpeed: 30,
						}}
					/>
				</AutoText>
			</Image>

			<AboutMessage>
				
				<Accordion style={{
					 display: 'flex',
					  flexDirection: 'column',
					 }}>

					<AccordionSummary expandIcon={<ExpandMore />}>
						<Heading3>Eco-friendly delvivery</Heading3>
					</AccordionSummary>

					<AccordionDetails>
						This drove us to start their own business.
						We hope you enjoy our products as much as we enjoy offering them to you.
						If you have any questions or comments,
						please don't hesitate to contact us.
					</AccordionDetails>

				</Accordion>
			</AboutMessage>
			<AboutBoxes	/>


		</AboutWrapper>
	)
}


