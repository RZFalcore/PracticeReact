import React, { Component } from "react";
import { connect } from "react-redux";
import TaskListItem from "../TaskItem/TaskItem";
import { fetchTasksOperation } from "../../redux/tasks/tasksOperations";
import styles from "./TaskList.module.css";

class TaskList extends Component {
  componentDidMount() {
    this.props.onFetchTasks();
  }

  render() {
    const { tasks, loading } = this.props;
    return (
      <ul className={styles.taskList}>
        {loading && <h2>LOADING...</h2>}
        {tasks.map(({ id }) => (
          <TaskListItem key={id} id={id} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ tasks }) => {
  const normalizedFilter = tasks.filter.toLowerCase();

  const filteredTasks = tasks.items.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter)
  );

  return {
    tasks: filteredTasks,
    loading: tasks.loading,
  };
};
const mapDispatchToProps = {
  onFetchTasks: fetchTasksOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
