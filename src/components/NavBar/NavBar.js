import React from 'react';
import {
    Bars,
    Nav,
    NavLink,
    NavMenu,
    NavLogo,

} from './NavBarStyles';

export const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLogo to='/'>
                    Shoppaholix
                </NavLogo>
                <Bars />
                <NavMenu>
                    <NavLink to='/' >
                        Home
                    </NavLink>
                    <NavLink to='/about' >
                        About
                    </NavLink>
                    <NavLink to='/events' >
                        Events
                    </NavLink>
                </NavMenu>

            </Nav>
        </>
    );
};


