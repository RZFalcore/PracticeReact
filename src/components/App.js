import React, { Component } from "react";
import SignUpForm from "./SignUpForm/SignUpForm";

class App extends Component {
  handleSignUp = (credentials) => {
    console.log(credentials);
  };

  render() {
    return <SignUpForm onSignUp={this.handleSignUp} />;
  }
}

export default App;
