import React from 'react'
import { Products } from '../../Products/Products';
import styled from 'styled-components';


const ShopWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Shop = () => {
    return (
        <ShopWrapper>
            <Products />
        </ShopWrapper>
    )
}


