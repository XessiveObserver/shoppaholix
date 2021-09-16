import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	background-color: #c2a184;
	border-radius:0.8em;
	opacity: 0.9;
	height: 85px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.2rem calc((100vw - 1000px) / 2);
	z-index: 12;
	/* Third Nav */
	/* justify-content: flex-start; */
`;

export const NavLogo = styled(Link)`
	color:#fff;
	font-weight: bolder;
	cursor: pointer;
	margin: 0.8em;
	padding: 0.8em;
	margin-right: 0.3em;
	text-decoration: none;
	font-size:2.5rem;
	transition: all .5s ease;
	&.active {
		color: #185708;
	}
	&:hover{
		transform: scale(1.08);
		color: #200b0b;
	}
`;

export const NavLink = styled(Link)`
	color: black;
	display: grid;
	grid-template-columns: repeat(4, auto);
	grid-gap: 0.2em;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	font-weight: bolder;
	transition: all .5s ease;
	&.active {
		color: #185708;
	}
	&:hover {
		transform: scale(1.2);
		color: #e4d6d6;
		font-weight: bolder;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
	white-space: nowrap; */
	@media screen and (max-width: 768px) {
		display: flex;
	}
`;


