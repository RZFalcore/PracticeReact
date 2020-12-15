import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Loadable from "react-loadable";

import Dashboard from "./Dashboard";

const Loading = ({ pastDelay }) => (pastDelay ? <h3>Loading...</h3> : null);

const Contacts = () =>
  Loadable({
    loader: () => import("./Contacts.js"),
    loading: Loading,
    delay: 200,
  });
const About = () =>
  Loadable({
    loader: () => import("./About.js"),
    loading: Loading,
    delay: 200,
  });

// const TestComponent = Loadable({
//   loader: () => import("../Test/Test"),
//   loading: Loading,
//   delay: 300
// })
export default class Test extends Component {
  // state = { isOpen: false };

  // handleClick = () => {
  //   this.setState((state) => ({ isOpen: !state.isOpen }));
  // };

  render() {
    // const { isOpen } = this.state;

    return (
      <Router>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <Route path="/" exact component={Dashboard} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />

        <h1>Test</h1>
        {/* <button onClick={this.handleClick}>Toggle Test component</button>
        {isOpen && <TestComponent  />} */}
      </Router>
    );
  }
}
