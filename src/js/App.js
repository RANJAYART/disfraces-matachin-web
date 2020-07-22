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

function App() {
      return (
          <Router>
              <Switch>
                  <Route path = "/" exact component={Home}/>
                  <Route path = "/about" exact component={About}/>
                  <Route path = "/shop" exact component={Shop}/>
              </Switch>
          </Router>
      );
}

export default App;
