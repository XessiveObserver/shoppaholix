import { GlobalStyles, Container } from './GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Shop } from '../Pages/Shop/Shop';
import { About } from '../Pages/About/About';
import { Events } from '../Pages/Events/Events';
import { HomeBoxes } from '../Pages/Home/HomeBoxes';
import { HomeBoxe } from '../Pages/Home/HomeBox';
import { HomeBoxesMore } from '../Pages/Home/HomeBoxesMore';
import { Hero } from '../Hero/Hero';
import { Footer } from '../Footer/Footer';

function App() {


    return (
        <Container>
            <GlobalStyles />
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={App}>
                        <Hero />
                        <HomeBoxes />
                        <HomeBoxe />
                        <HomeBoxesMore />
                    </Route>
                    <Route path="/about" component={About}>    
                    </Route>
                    <Route path="/Shop" component={Shop}  >
                        <Shop />   
                    </Route>
                    <Route path="/events" component={Events}>
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
            
        </Container>


    );
}

export default App;