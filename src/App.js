import logo from './logo.svg';
import './App.css';
import Header from './componenets/Shared/Header/Header';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './componenets/Home/Home';
import Details from './componenets/Details/Details';
import Foods from './componenets/Foods/Foods';
import Login from './componenets/Login/Login';
import SignUp from './componenets/SignUp/SignUp';
import Cart from './componenets/Cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/foods">
            <Foods></Foods>
          </Route>

          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signUp">
            <SignUp></SignUp>
          </Route>
          {/* <Route path="/details">
            <Details></Details>
          </Route> */}
          <Route path="/details/:serviceId">
            <Details></Details>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
