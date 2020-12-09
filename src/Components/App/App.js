import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";

const App = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  </>
);
export default App;