import { GlobalStyles, Container } from './GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Api } from '../Api/Api';
import { About } from '../Pages/About';
import { Events } from '../Pages/Events';
import { Hero } from '../Hero/Hero';
import { Footer } from '../Footer/Footer';

function App() {


    return (
        <Container>
            <GlobalStyles />
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={App} >
                        <Hero />
                        <Api />
                    </Route>
                    <Route path="/about" component={About}  >    
                    </Route>
                    <Route path="/events" component={Events}  >
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
            
        </Container>


    );
}

export default App;