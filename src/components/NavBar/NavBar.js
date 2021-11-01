import React from 'react';
import { Home, Info, Event, AddShoppingCart } from '@material-ui/icons'
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
                      <Info /> About
                    </NavLink>
                    <NavLink to='/events' >
                    <Event />  Events
                    </NavLink>
                    <NavLink to='/' >
                    <AddShoppingCart />
                    </NavLink>
                </NavMenu>

            </Nav>
        </>
    );
};


