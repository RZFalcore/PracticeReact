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
    <Nav />
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/about" >
        <AboutPage/>
      </Route>
      <Route path="/contact" >
        <ContactPage/>
      </Route>
      <Route path="/articles/:articleID">
        <ArticlePage/>
      </Route>
      <Route path="/articles" >
        <ArticlesPage/>
      </Route>
      <Route >
        <NotFoundPage/>
      </Route>
    </Switch>
  </>
);
export default App;