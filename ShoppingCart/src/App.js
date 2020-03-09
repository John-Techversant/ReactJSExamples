import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import store from "./store"
import './App.css';
import CartContainer from './containers/CartContainer';
import ProductsContainer from './containers/ProductsContainer'
import HeaderedLayout from "./containers/HeaderLayout"

function App() {
  return (
    <Provider store = { store } >
      <BrowserRouter>
        <Switch>
          <HeaderedLayout exact path= "/" ComponentToRender={ProductsContainer} />
          <HeaderedLayout path="/mycart" ComponentToRender={CartContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
