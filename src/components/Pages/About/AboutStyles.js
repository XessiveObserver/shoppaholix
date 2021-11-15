import styled from 'styled-components';

import AboutImg from '../PageImages/about-img.jpg'


export const AboutWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin: 1em;

`;


export const Heading3 = styled.h3`
	color: green;
	align-self: center;
	opacity: 0.6;
`;
// 




export const AutoText = styled.div`
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

export const Image = styled.div`
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
	border-radius: 0.8em;
	border: 0.3em solid grey;
	opacity: 0.5;
`;




export const AboutMessage = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	margin: 5em;
	padding: 0;

`;