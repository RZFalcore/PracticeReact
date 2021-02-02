import React from "react";
import styles from "./TaskItem.module.css";

const TaskItem = ({ id, text, complited, onUpdate, onRemove }) => (
  <li key={id} className={complited ? styles.listItemChecked : styles.listItem}>
    <p className={styles.listItemText}>{text}</p>
    <label className={styles.listItemLabel}>
      <input
        type="checkbox"
        name="complited"
        checked={complited}
        onChange={onUpdate}
      />
      Complited
      <button className={styles.listItemButton} onClick={onRemove}>
        Delete
      </button>
    </label>
  </li>
);

export default TaskItem;
