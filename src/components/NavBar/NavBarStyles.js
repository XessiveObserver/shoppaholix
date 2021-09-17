import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";

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

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavLogo = styled(Link)`
	color:#fff;
	font-weight: bolder;
	cursor: pointer;
	margin: 0.8em;
	padding: 0.8em;
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
		color: Seagreen;
		font-weight: bolder;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
	white-space: nowrap; */
	@media screen and (max-width: 768px) {
		display: flex;
	}
`;


