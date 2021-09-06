import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background-color: #c2a184;
height: 85px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLogo = styled.label`
font-weight: bolder;
cursor: pointer;
	
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
&.active {
	color: #185708;
}
&:hover {
	color: #e4d6d6;
	font-weight: bolder;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #5ab98a;
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

