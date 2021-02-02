import React from "react";
import { connect } from "react-redux";
import tasksActions from "../../redux/tasks/tasksActions";
import TaskListItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, onRemoveTask, onUpdateTask }) => (
  <ul className={styles.taskList}>
    {tasks.map(({ id, text, complited }) => (
      <TaskListItem
        key={id}
        text={text}
        complited={complited}
        onRemove={() => onRemoveTask(id)}
        onUpdate={() => onUpdateTask(id)}
      />
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

const mapDispatchToProps = {
  onRemoveTask: tasksActions.removeTask,
  onUpdateTask: tasksActions.toggleComplited,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
