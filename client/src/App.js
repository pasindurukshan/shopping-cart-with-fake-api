import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Switch, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [searchTerm, setsearchTerm] = useState("")

  const setSearch = (word) => {
    setsearchTerm(word)
  }

  return (
    <>
      <Navbar setSearch={setSearch} searchTerm={searchTerm}/>
        <Switch>
        <Route exact path="/" render={(props) => <Home {...props} searchTerm={searchTerm} />} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      </>
  );
}

export default App;
