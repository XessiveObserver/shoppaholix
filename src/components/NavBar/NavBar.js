import React from 'react';
import { Home, Info, AddShoppingCart } from '@material-ui/icons'
import {
    Nav,
    NavLink,
    NavMenu,
    NavLogo,

} from './NavBarStyles';
import { Shop } from '@material-ui/icons'

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
                    <NavLink to='/shop' >
                        <Shop /> Shop
                    </NavLink>
                    <NavLink to='/about' >
                        <Info /> About
                    </NavLink>
                    <NavLink to='/cart' >
                        <AddShoppingCart to=''
                            style={{ fontSize: 28 }}
                        >
                        </AddShoppingCart>
                    </NavLink>
                </NavMenu>

            </Nav>
        </>
    );
};


