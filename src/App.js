import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import ContextProvider from './context/ContextProvider';

function App() {
  return (

        <ContextProvider>
            <BrowserRouter>
              <Header />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/cart" component={Cart} />
                </Switch>
            </BrowserRouter>
        </ContextProvider>

  );
}

export default App;
