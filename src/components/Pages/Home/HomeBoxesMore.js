import React from 'react'
import {
    Container,
    Box,
    BoxTitle,
    BoxText
} from "./HomeBoxesStyles";

import ShopNowIMage from '../PageImages/shop-now.jpg'
import ShopNowIMage2 from '../PageImages/shop-now2.jpg'
import ShopNowIMage3 from '../PageImages/shop-now3.png'
import styled from 'styled-components';

const Image = styled.div`
	display: flex;
	flex-direction: column;
	background-image: linear-gradient( to top right,
         rgba(11, 10, 10, 0.38),
          rgba(11, 10, 10, 0.19)),
	url(${ShopNowIMage});
	width:100%;
	height: 30vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
    border-radius: 0.8em;
`;
const Image2 = styled.div`
	display: flex;
	flex-direction: column;
	background-image: linear-gradient( to top right,
         rgba(11, 10, 10, 0.38),
          rgba(11, 10, 10, 0.19)),
	url(${ShopNowIMage2});
	width:100%;
	height: 30vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
    border-radius: 0.8em;
`;
const Image3 = styled.div`
	display: flex;
	flex-direction: column;
	background-image: linear-gradient( to top right,
         rgba(11, 10, 10, 0.38),
          rgba(11, 10, 10, 0.19)),
	url(${ShopNowIMage3});
	width:100%;
	height: 30vh;
	align-items: center;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
    border-radius: 0.8em;
`;

export const HomeBoxesMore = () => {
    return (
        <Container>
            
            <Box>
                <BoxTitle>Eco-friendly delvivery</BoxTitle>
                <BoxText>This drove us to start their own business.
                    We hope you enjoy our products as much as we enjoy offering them to you.
                    If you have any questions or comments,
                    please don't hesitate to contact us.</BoxText>
                    <Image />
            </Box>
            <Box>
                <BoxTitle>Welcome to Shoppahlix</BoxTitle>
                <BoxText>Your number one source for all things electronic.
                    We're dedicated to providing you the very best of electronics,
                    with an emphasis on customer care,
                    product market fit, custtomer satisfaction.</BoxText>
                    <Image2 />
            </Box>
            <Box>
                <BoxTitle>Welcome to Shoppahlix</BoxTitle>
                <BoxText>Your number one source for all things electronic.
                    We're dedicated to providing you the very best of electronics,
                    with an emphasis on customer care,
                    product market fit, custtomer satisfaction.</BoxText>
                    <Image3 />
            </Box>
        </Container>
    )
}
