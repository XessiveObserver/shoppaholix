import React from 'react';
import styled from 'styled-components';
import { Properties } from './Properties';
import { States } from './States';

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
		<Properties name = 'rose' age = '28' village= 'miro 1'>
		<button onClick ={() => alert("Get over yourself!")}>
			Grow up already
		</button>
		</Properties>
		<States />
	</EventsWrapper>
	
)
}

