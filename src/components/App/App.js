import { GlobalStyles, Container } from './GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Shop } from '../Pages/Shop/Shop';
import { About } from '../Pages/About/About';
import { Events } from '../Pages/Events/Events';
import { Procedure } from '../Pages/Home/Procedure/Procedure';
import { HowItWorks } from '../Pages/Home/Procedure/HowItWorks';
import { WhatWeDo } from '../Pages/Home/WhatWeDo/WhatWeDo';
import { Clients } from '../Pages/Home/Clients/Clients';
import { ClientReviewHeader } from '../Pages/Home/Clients/ClientReviewHeader';
import { Hero } from '../Hero/Hero';
import { Footer } from '../Footer/Footer';
import { AboutHero } from '../Pages/About/AboutHero';

function App() {


    return (
        <Container>
            <GlobalStyles />
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={App}>
                        <Hero />
                        <WhatWeDo />
                        <ClientReviewHeader />
                        <Clients />
                        <HowItWorks />
                        <Procedure />
                    </Route>
                    <Route path="/about" component={About}>
                        <AboutHero />
                        <About />
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