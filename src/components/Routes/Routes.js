import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Api } from '../Api/Api';

export const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>  
                    <Route exact path="/"><Api /></Route>
                    <Route exact path="/about" />
                    <Route exact path="/events" />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
