import React, { useState, useEffect } from 'react';
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

export const Blog = () => {
	
	const [count, setCount] = useState(0);
	const[fruit, setFruit] = useState('maize');

	useEffect(() => {
		//update document title using browser API
		document.title = `You clicked ${count} times`
	});

	return (

		<EventsWrapper>
			<H1>Our Events Will Get You Hooked For Good.</H1>
			<Properties name='rose' age='28' village='miro 1'>
				<button onClick={() => alert("Get over yourself!")}>
					Grow up already
				</button>
			</Properties>
			<States />
			
			<p>You clicked me {count} times .</p>
			<button onClick={() => setCount(count + 1)}>
				Click Me Out !
			</button>
			
			<p> {fruit} is also a fruit</p>
			<button onFocus={() => setFruit('mango')}>Hover Me</button>

		</EventsWrapper>

	)
}

