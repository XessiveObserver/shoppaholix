import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Api } from '../Api/Api';
import { About } from '../Pages/About';
import { Events } from '../Pages/Events';

export const Header = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>  
                    <Route exact path="/">
                        <Api />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/events">
                        <Events />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
