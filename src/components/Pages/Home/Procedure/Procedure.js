import React from 'react'
import {
    Container,
    Box,
    BoxTitle,
    BoxText
} from "./ProcedureStyles";

import ShopNowIMage from '../../PageImages/shop-now.jpg'
import ShopNowIMage2 from '../../PageImages/shop-now2.jpg'
import ShopNowIMage3 from '../../PageImages/shop-now3.png'
import styled from 'styled-components';

const Image = styled.div`
	display: flex;
	flex-direction: column;
	background-image: 
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
	background-image:
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
	background-image:
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

export const Procedure = () => {
    return (
        <Container>
            
            <Box>
                <BoxTitle>Consumer information</BoxTitle>
                <BoxText>The goal is to make it easy for users to research purchases,
                find information about different products, their features and prices,
                and then connect with sellers to make their purchase...</BoxText>
                    <Image />
            </Box>
            <Box>
                <BoxTitle>Product information</BoxTitle>
                <BoxText>Online retailers submit feeds containing product information
                 to Google Shopping. Since this product information comes
                 directly from the seller, this means we’re able to show
                  the current prices, latest offers 
                  and current product availability..</BoxText>
                    <Image2 />
            </Box>
            <Box>
                <BoxTitle>Making a purchase</BoxTitle>
                <BoxText> For example, a search for "bulb" shows
                results for both the plant and lighting categories.
                By clicking on your desired category, you'll see results
                only in the category you’ve selected.</BoxText>
                    <Image3 />
            </Box>
        </Container>
    )
}
