import React from 'react';
import '../css/App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Shop from "./routes/Shop";
import ShoppingCart from "./routes/ShoppingCart";
import ProductDetails from "./routes/ProductDetails";

function App() {
      return (
          <Router>
              <Switch>
                  <Route path = "/" exact component={Home}/>
                  <Route path = "/about" exact component={About}/>
                  <Route path = "/shop" exact component={Shop}/>
                  <Route path = "/cart" exact component={ShoppingCart}/>
                  <Route path = "/product-detail/:costumeId" exact component={ProductDetails}/>
              </Switch>
          </Router>
      );
}

export default App;