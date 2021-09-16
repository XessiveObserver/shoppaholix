import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavLogo,

} from './NavBarStyles';

export const NavBar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLogo to='/'>Shoppaholix</NavLogo>
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


