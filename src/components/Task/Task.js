import React from "react";
import PropTypes from "prop-types";

import Priority from "../../utils/Priority";
import PrioritySelector from "../PrioritySelector/PrioritySelector";
import styles from "./Task.module.css";

const options = Object.values(Priority);

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
        <PrioritySelector
          options={options}
          priority={priority}
          onChange={(e) => onUpdatePriority(id, e.target.value)}
        />
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
