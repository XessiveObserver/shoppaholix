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


