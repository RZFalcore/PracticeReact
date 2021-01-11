import React, { Component } from "react";

export default class Togglable extends Component {
  state = { on: false };

  handleToggle = () => {
    this.setState((state) => ({ on: !state.on }));
  };
  render() {
    const { on } = this.state;
    const handleToggle = this.handleToggle;
    return this.props.children({ on, onToggle: handleToggle });
  }
}
