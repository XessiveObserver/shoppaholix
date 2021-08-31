import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
   
} from './NavBarStyles';

export const NavBar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
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


