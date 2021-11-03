import React from 'react'
import LandImage from '../PageImages/home-page.jpg'
import styled from 'styled-components';


import {
    Container,
} from "./HomeBoxesStyles";

const Image = styled.div`
	display: flex;
	flex-direction: column;
	background-image: linear-gradient( to top right,
         rgba(11, 10, 10, 0.38),
          rgba(11, 10, 10, 0.19)),
	url(${LandImage});
	width:50%;
	height: 50vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
    border-radius: 0.8em;
`;

const ImageTitle = styled.h3`
    text-align: center;
    color: green;
    margin: 0.3;
`;

const ImageText = styled.p`
    text-align: left;
    color: black;
    margin: 1em;
`;

export const HomeBoxe = () => {
    return (
        <Container>
            <Image>
            <ImageTitle>Eco-friendly delvivery</ImageTitle>
                <ImageText>This drove us to start their own business.
                    We hope you enjoy our products as much as we enjoy offering them to you.
                    If you have any questions or comments,
                    please don't hesitate to contact us.</ImageText>
            </Image>
        </Container>
    )
}
