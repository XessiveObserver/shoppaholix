
import Api from '../Api/Api';

import { GlobalStyles, Container } from './GlobalStyles';
import { Routes } from '../Routes/Routes';

function App() {


    return (
        <Container>
            <GlobalStyles />
            <Routes />
            <Api />
        </Container>

    );
}

export default App;