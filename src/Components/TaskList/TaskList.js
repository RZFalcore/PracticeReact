import React from "react";
import { connect } from "react-redux";
import TaskListItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks }) => (
  <ul className={styles.taskList}>
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
  };
};


export default connect(mapStateToProps)(TaskList);
