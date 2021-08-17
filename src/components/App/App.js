import './App.css';
import Api from '../Api/Api';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from '../Pages/About';
import Events from '../Pages/Events';

function App() {

    return (
        <div className="App">
            <h1> Shoppaholix </h1>

            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to ="/events">Events</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Api />
                        <Api />
                        <Api />
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

    );
}

export default App;