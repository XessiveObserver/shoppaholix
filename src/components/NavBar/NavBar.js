import React from 'react';
import { Home, Event } from '@material-ui/icons'
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
                        <Home /> Home
                    </NavLink>
                    <NavLink to='/about' >
                      About
                    </NavLink>
                    <NavLink to='/events' >
                    <Event />  Events
                    </NavLink>
                </NavMenu>

            </Nav>
        </>
    );
};


