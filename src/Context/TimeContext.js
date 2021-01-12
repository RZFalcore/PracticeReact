import React, { Component, createContext } from "react";

const TContext = createContext();

export default class TimeContext extends Component {
  state = { time: Date.now() };

  setTime = () => {
    this.setState({ time: Date.now() });
  };
  render() {
    return (
      <TContext.Provider
        value={{ time: this.state.time, setTime: this.setTime }}
      >
        {this.props.children}
      </TContext.Provider>
    );
  }
}
