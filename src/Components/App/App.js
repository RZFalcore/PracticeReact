import React, { lazy, Suspense } from "react";
// import Loadable from "react-loadable";
import { Switch, Route, Redirect } from "react-router-dom";

import Nav from "./Nav/Nav";
// import HomePage from "../../Pages/HomePage";
// import AboutPage from "../../Pages/AboutPage";
// import ContactPage from "../../Pages/ContactPage";
// import NotFoundPage from "../../Pages/NotFoundPage";
// import Loader from './Loader/Loader'
import ArticlesPage from "../../Pages/ArticlesPage";
import ArticlePage from '../../Pages/ArticlePage'

const AsyncHomePage = lazy(() => import("../../Pages/HomePage" /* webpackChunkName: "home-page" */))
const AsyncAboutPage = lazy(() => import("../../Pages/AboutPage" /* webpackChunkName: "about-page" */))
const AsyncContactPage = lazy(() => import("../../Pages/ContactPage" /* webpackChunkName: "contact-page" */))
const AsyncNotFoundPage = lazy(() => import("../../Pages/NotFoundPage" /* webpackChunkName: "notFound-page" */ ))
//React loader

// const AsyncHomePage = Loadable({
//   loader: () =>
//     import("../../Pages/HomePage" /* webpackChunkName: "home-page" */),
//   loading: Loader,
//   timeout: 6000,
//   delay: 300,
// });

// const AsyncAboutPage = Loadable({
//   loader: () =>
//     import("../../Pages/AboutPage" /* webpackChunkName: "about-page" */),
//   loading: Loader,
//   timeout: 6000,
//   delay: 300,
// });

// const AsyncContactPage = Loadable({
//   loader: () =>
//     import("../../Pages/ContactPage" /* webpackChunkName: "contact-page" */),
//   loading: Loader,
//   timeout: 6000,
//   delay: 300,
// });

const App = () => (
  <>
    <Nav />
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        <Route path="/" exact component={AsyncHomePage} />
        <Route path="/about" component={AsyncAboutPage} />
        <Route path="/contact" component={AsyncContactPage} />
        <Route path="/articles/:articleID" component={ArticlePage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route component={AsyncNotFoundPage} />
        <Redirect to="/" />
        </Switch>     
    </Suspense>
  </>
);
export default App;