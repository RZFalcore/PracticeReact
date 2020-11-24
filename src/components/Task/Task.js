import React from "react";
import PropTypes from "prop-types";
import styles from "./Task.module.css";

const Task = ({
  id,
  text,
  completed,
  priority,
  onDeleteTask,
  onUpdateComplited,
  onUpdatePriority,
}) => (
  <>
    <p>{text}</p>
    <div className={`${styles.actions} ${styles[`${priority}`]}`}>
      <button className={styles.deleteButton} onClick={onDeleteTask}>
        Delete
      </button>
      <label className={styles.select}>
        Priority
        <select
          name="priority"
          value={priority}
          onChange={(e) => onUpdatePriority(id, e.target.value)}
        >
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
      </label>
      <label className={styles.completed} htmlFor="completed">
        Completed
        <input
          type="checkbox"
          name="completed"
          id={id}
          checked={completed}
          onChange={onUpdateComplited}
        />
      </label>
    </div>
  </>
);

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpdateComplited: PropTypes.func.isRequired,
};

export default Task;
