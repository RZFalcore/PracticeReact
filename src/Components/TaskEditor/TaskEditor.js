import React, { Component } from "react";
import { connect } from "react-redux";
import tasksActions from "../../redux/tasks/tasksActions";
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
        <button className="taskEditor-button" type="submit">
          Add task
        </button>
      </form>
    );
  }
}


const mapDispatchToProps = {
  onAddTask: tasksActions.addTask,
};

export default connect(null, mapDispatchToProps)(TaskEditor);
