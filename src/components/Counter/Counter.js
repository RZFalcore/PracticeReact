import React, { Component } from "react";

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
  };
  state = {
    value: 0,
  };

  handleIncrement = (e) => {
    console.log(e);
  };

  handleDecrement = (e) => {
    console.log(e);
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;
    return (
      <div>
        <span>{value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Inc + {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Dec - {step}
        </button>
      </div>
    );
  }
}
