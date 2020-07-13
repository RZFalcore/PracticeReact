import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "./Controls";

export default class Counter extends Component {
  static defaultProps = {
    value: 1,
    step: 1,
  };

  static propTypes = {
    value: PropTypes.number,
    step: PropTypes.number,
  };
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    const { step } = this.props;

    // this.setState({ value: value + step });

    this.setState((prevState) => ({
      value: prevState.value + step,
    }));
  };

  handleDecrement = () => {
    const { step } = this.props;
    // const { value } = this.state;
    // this.setState({ value: value - step });

    this.setState((prevState) => ({ value: prevState.value - step }));

    //!Rare useCase: actual props
    // this.setState((prevState, props) => ({
    //   value: prevState.value - props.step,
    // }));
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;
    return (
      <div>
        <span>{value}</span>
        <Controls
          step={step}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
