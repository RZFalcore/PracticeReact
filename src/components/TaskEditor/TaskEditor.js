import React, { Component } from "react";
import PropTypes from "prop-types";

import Priority from "../../utils/Priority";
import PrioritySelector from "../PrioritySelector/PrioritySelector";
import styles from "./TaskEditor.module.css";

const options = Object.values(Priority);
class TaskEditor extends Component {
  state = {
    text: "",
    priority: Priority.NORMAL,
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

    onTaskAdd({ ...this.state });
    this.setState({ text: "", priority: Priority.NORMAL });
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
          <PrioritySelector
            options={options}
            priority={priority}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default TaskEditor;
