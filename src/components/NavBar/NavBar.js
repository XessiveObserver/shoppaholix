import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavLogo,

} from './NavBarStyles';

export const NavBar = () => {
    return (
        <>
            <Nav>
                <Bars />
                
                <NavMenu>
                <NavLogo>Shoppaholix</NavLogo>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/events' activeStyle>
                        Events
                    </NavLink>
                </NavMenu>

            </Nav>
        </>
    );
};


