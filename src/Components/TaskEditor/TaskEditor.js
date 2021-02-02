import React, { Component } from "react";
import { connect } from "react-redux";
class TaskEditor extends Component {
  state = { text: "" };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="taskEditor" onSubmit={this.handleSubmit}>
        <label className="taskEditor-label">
          Text
          <input
            type="text"
            className="taskEditor-input"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskEditor);
