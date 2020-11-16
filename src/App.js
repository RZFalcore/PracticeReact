import React, { Component } from "react";
import "./App.css";

import SignUpForm from "./components/SignUpForm/SignUpForm";

class App extends Component {
  handleFormSubmit = (credentials) => {
    console.log(credentials);
  };

  render() {
    return (
      <div>
        <SignUpForm onSignUp={this.handleFormSubmit} />
      </div>
    );
  }
}

export default App;
