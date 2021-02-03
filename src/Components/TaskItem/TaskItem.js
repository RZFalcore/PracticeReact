import React from "react";
import { connect } from "react-redux";
import tasksActions from "../../redux/tasks/tasksActions";

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

const mapStateToProps = (state, ownProps) => {
  const item = state.tasks.items.find((task) => task.id === ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(tasksActions.removeTask(ownProps.id)),
  onUpdate: () => dispatch(tasksActions.toggleComplited(ownProps.id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);