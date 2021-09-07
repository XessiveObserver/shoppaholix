import React from 'react';
import styled from 'styled-components';

const EventsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const H1 = styled.h1`
	color: seagreen;
`;

export const Events = () => {
return (
	<EventsWrapper>
	<H1>Our Events Will Get You Hooked For Good.</H1>
	</EventsWrapper>
)
}

