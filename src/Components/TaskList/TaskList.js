import React from "react";
import { connect } from "react-redux";
import TaskListItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, loading }) => (
  <ul className={styles.taskList}>
    {loading && <h2>LOADING...</h2>}
    {tasks.map(({ id }) => (
      <TaskListItem key={id} id={id} />
    ))}
  </ul>
);

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


export default connect(mapStateToProps)(TaskList);
