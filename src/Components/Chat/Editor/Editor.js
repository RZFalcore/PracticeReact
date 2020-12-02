import React, { Component } from "react";
import faker from "faker";

export default class Editor extends Component {
  state = { text: "" };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddMessage(
      this.state.text !== "" ? this.state.text : faker.lorem.sentence()
    );
    this.setState({ text: "" });
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={text} />
        <button type="submit">Send</button>
      </form>
    );
  }
}
