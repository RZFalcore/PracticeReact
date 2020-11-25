import React from "react";
import PropTypes from "prop-types";

import styles from "./TaskList.module.css";
import Task from "../Task/Task";

const TaskList = ({
  tasks,
  onDeleteTask,
  onUpdateComplited,
  onUpdatePriority,
}) => {
  return (
    tasks.length > 0 && (
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li className={styles.taskItem} key={task.id}>
            <Task
              {...task}
              onDeleteTask={() => onDeleteTask(task.id)}
              onUpdateComplited={() => onUpdateComplited(task.id)}
              onUpdatePriority={onUpdatePriority}
            />
          </li>
        ))}
      </ul>
    )
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpdateComplited: PropTypes.func.isRequired,
  onUpdatePriority: PropTypes.func.isRequired,
};

export default TaskList;
