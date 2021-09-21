import React from 'react';
import styled from 'styled-components';
import Typewriter from "typewriter-effect";


const AboutWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 1em;

`;

const P1 = styled.p`
	color: seagreen;
	margin: 3em;
`;
// 



const AboutHeroImage = styled.div`
	display: flex;
	flex-direction: column;
	height: 70vh;
	width: 100vw;
	background-color: #80c7c7;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	opacity: 0.6;

`;
const AboutHeroParagraph = styled.p`
	font-size: 5em;
	position: absolute;
	margin:1em;
	padding: 8em;
	display: flex;
	flex-direction: column;
	text-align:center;
	align-items: center;
	font-weight:bold;
	font-size: 1.5em;
	color:green;
	text-shadow: 1px 1px 2px black;
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
			<P1>your number one source for all things electronic.
				We're dedicated to providing you the very best of electronics,
				with an emphasis on customer care,
				product market fit, custtomer satisfaction.</P1>
			<AboutHeroImage>
				<AboutHeroParagraph>
					<Typewriter
						onInit={(typewriter) => {
							typewriter

								.typeString("Welcome to Shoppahlix")

								.pauseFor(1000)
								.deleteAll()
								.typeString("Shoppaholix is your number one source for all electronics.")
								.start();
						}}
					/>
				</AboutHeroParagraph>
			</AboutHeroImage>
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


