import React, { Component } from "react";
import Title from "../Title/Title";
import withFetch from "../../HOC/withFetch";
import Toolbar from "../Toolbar/Toolbar";

import ThemeContext from "../../Context/Context";
class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <ThemeContext.Provider value="light">
          <div className="App">
            <Toolbar />
            </div>
        </ThemeContext.Provider>
        <h1>App</h1>
        <Title />
        <Title title="Obi" />
      </div>
    );
  }
}

export default withFetch("https://jsonplaceholder.typicode.com/todos")(App);
