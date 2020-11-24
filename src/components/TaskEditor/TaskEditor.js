import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./TaskEditor.module.css";

class TaskEditor extends Component {
  state = {
    text: "",
    priority: "normal",
  };

  static propTypes = {
    onTaskAdd: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onTaskAdd } = this.props;

    console.log("Form submit");
    onTaskAdd({ ...this.state });
    this.setState({ text: "", priority: "normal" });
  };

  render() {
    const { text, priority } = this.state;

    return (
      <form className={styles.editForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Type task text..."
          onChange={this.handleChange}
          value={text}
        />
        <label>
          Select priority
          <select name="priority" value={priority} onChange={this.handleChange}>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default TaskEditor;
