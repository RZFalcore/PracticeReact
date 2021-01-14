import React, { Component } from "react";
import Title from "../Title/Title";
import withFetch from "../../HOC/withFetch";
import Toolbar from "../Toolbar/Toolbar";
import Togglable from "../Togglable/Togglable";

import ThemeContext from "../../Context/Context";
import Reader from "../Reader/Reader";
import Publication from "../Reader/Publication";

import publications from "../../data/publications.json";
import Controls from "../Reader/Controls";
import Counter from "../Reader/Counter";
class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Reader publications={publications}>
          <Publication />
          <Controls />
          <Counter />
        </Reader>
        <ThemeContext.Provider value="light">
          <div className="App">
            <Toolbar />
          </div>
        </ThemeContext.Provider>
        <h1>App</h1>
        <Title />
        <Title title="Obi" />
        <Togglable>
          {({ on, onToggle }) => (
            <div>
              <button onClick={onToggle}>{on ? "Hide" : "Show"}</button>
              {on && <div>RenderProp</div>}
            </div>
          )}
        </Togglable>
      </div>
    );
  }
}

export default withFetch("https://jsonplaceholder.typicode.com/todos")(App);