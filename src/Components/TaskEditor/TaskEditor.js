import React, { Component } from "react";
import { connect } from "react-redux";
// import { addTask } from "../../redux/tasks/tasksActions";
import { addTaskOperation } from "../../redux/tasks/tasksOperations";
import styles from "./TaskEditor.module.css";
class TaskEditor extends Component {
  state = { text: "" };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
      e.preventDefault();

      const { text } = this.state;

      this.props.onAddTask(text);
      this.setState({ text: "" });
  };

  render() {
    return (
      <form className={styles.taskEditor} onSubmit={this.handleSubmit}>
        <label className={styles.taskEditorLabel}>
          Text
          <input
            type="text"
            className={styles.taskEditorInput}
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.taskEditorButton} type="submit">
          Add task
        </button>
      </form>
    );
  }
}


const mapDispatchToProps = {
  onAddTask: addTaskOperation,
};

export default connect(null, mapDispatchToProps)(TaskEditor);
