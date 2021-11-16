import styled from 'styled-components';
import AboutImg from '../PageImages/about-img.jpg'

export const AboutAutoText = styled.div`
	text-align: center;
    position: absolute;
    top: 50%;
	left:50%;
	font-weight:bold;
	font-size: 1.5em;
	color: #158dc9;
	text-shadow: 1px 1px 2px black;
	transform: translate(-50%, -50%);	
	
`;

export const AboutHeroImage = styled.div`
	display: flex;
	flex-direction: column;
	background-image:
	url(${AboutImg});
	height: 70vh;
	position: absolute;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;




export const AboutMessage = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	margin: 5em;
	padding: 0;

`;