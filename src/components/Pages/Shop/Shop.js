import React from 'react'
import { Api } from '../../Api/Api';
import styled from 'styled-components';


const ShopWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Shop = () => {
    return (
        <ShopWrapper>
            <Api />
        </ShopWrapper>
    )
}


