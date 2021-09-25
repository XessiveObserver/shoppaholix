import React from 'react';
import styled from 'styled-components';
import Typewriter from "typewriter-effect";
import AboutImg from './PageImages/bg-img-about.jpg'


const AboutWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 1em;

`;

const Heading1 = styled.h1`
	color: seagreen;
`;
// 




const AutoText = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 5em;
	position: absolute;
	padding: 10em;
	text-align:center;
	align-items: center;
	font-weight:bold;
	font-size: 1.5em;
	color:whitesmoke;
	text-shadow: 1px 1px 2px black;
	
`;

const Image = styled.div`
	padding: 5em;
	display: flex;
	flex-direction: column;
	background-image: url(${AboutImg});
	height: 70vh;
	width: 100vw;
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
	margin: 3em;
	padding:3em;
`;


export const About = () => {
	return (
		<AboutWrapper>
			<Heading1>About Us Shoppaholix.</Heading1>
			<Image />
			<AutoText>

				<Typewriter
					options={{
						strings: ['Welcome to Shoppahlix ...',
							'Shoppaholix is your number one source for all electronics.'],
						autoStart: true,
						loop: true,
					}}
				/>

			</AutoText>

			<AboutMessage>

				Welcome to Shoppahlix,
				your number one source for all things electronic.
				We're dedicated to providing you the very best of electronics,
				with an emphasis on customer care,
				product market fit, custtomer satisfaction.

				Founded in 2021 by Xessive Observer,
				Shoppahlix has come a long way from its beginnings in e-comm era.
				When Xessive Observer first started out,
				his passion for Shoppaholix message - was always.
				"eco-friendly delvivery
				drove them to start their own business.

				We hope you enjoy our products as much as we enjoy offering them to you.
				If you have any questions or comments,
				please don't hesitate to contact us.
			</AboutMessage>


		</AboutWrapper>
	)
}


