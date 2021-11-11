import React from 'react';
import { Home, Info, Event, AddShoppingCart } from '@material-ui/icons'
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
                <NavLogo to='/'>
                    Shoppaholix
                </NavLogo>
                <NavMenu>
                    <NavLink to='/' >
                        <Home /> Home
                    </NavLink>
                    <NavLink to='/about' >
                      <Info /> About
                    </NavLink>
                    <NavLink to='/events' >
                    <Event />  Blog
                    </NavLink>
                    <NavLink to='/' >
                    <AddShoppingCart 
                        style = {{fontSize: 28}}
                    />
                    </NavLink>
                </NavMenu>

            </Nav>
        </>
    );
};


