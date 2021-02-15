import React, { Component } from "react";
import { connect } from "react-redux";
import TaskListItem from "../TaskItem/TaskItem";
import { fetchTasksOperation } from "../../redux/tasks/tasksOperations";
import tasksSelectors from "../../redux/tasks/tasksSelectors";
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

const mapStateToProps = (state) => {
  return {
    tasks: tasksSelectors.getVisibleTasks(state),
    loading: tasksSelectors.getLoading(state),
  };
};
const mapDispatchToProps = {
  onFetchTasks: fetchTasksOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
