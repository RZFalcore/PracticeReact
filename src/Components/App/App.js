import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Nav from "./Nav/Nav";
import HomePage from "../../Pages/HomePage";
import AboutPage from "../../Pages/AboutPage";
import ContactPage from "../../Pages/ContactPage";
import ArticlesPage from "../../Pages/ArticlesPage";
import ArticlePage from '../../Pages/ArticlePage'
import NotFoundPage from "../../Pages/NotFoundPage";

const App = () => (
  <>
    <Nav  />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/articles/:articleID" component={ArticlePage} />
      <Route path="/articles" component={ArticlesPage} />
      <Route component={NotFoundPage} />
      <Redirect to="/" />
    </Switch>
  </>
);
export default App;