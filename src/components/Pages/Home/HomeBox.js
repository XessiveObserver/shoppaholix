import React from 'react'
import LandImage from '../PageImages/home-page.jpg'
import styled from 'styled-components';
import px2vw from "../../Utils/px2vw";


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
	width:100%;
	height: 25vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
    border-radius: 0.8em;
`;

const ImageTitle = styled.h3`
    text-align: center;
    color: #09515c;
    margin: 0.3;
    font-weight: bold;
`;

const ImageText = styled.p`
    text-align: left;
    color: #311a09;
    margin: 1em;
`;

const Box = styled.div`
  display: flex;
  border-radius: 0.8em;
  opacity:0.8;
  
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: white;
  height: 100%;
  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const HomeBoxe = () => {
    return (
        <Container>
            <Box>
            <Image />
            <ImageTitle>Eco-friendly delvivery</ImageTitle>
                <ImageText>This drove us to start their own business.
                    We hope you enjoy our products as much as we enjoy offering them to you.
                    If you have any questions or comments,
                    please don't hesitate to contact us.</ImageText>
          
            </Box>
        </Container>
    )
}
