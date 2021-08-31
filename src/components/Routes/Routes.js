import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { About } from '../Pages/About'
import { Events } from '../Pages/Events'

export const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path = "/" />
                    <Route path = "/about" exact component={About}/>
                    <Route path = "/events" exact component={Events}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
