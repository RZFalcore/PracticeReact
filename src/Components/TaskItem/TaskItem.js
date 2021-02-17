import React from "react";
import { connect } from "react-redux";
import {
  removeTaskOperation,
  toggleComplitedOperation,
} from "../../redux/tasks/tasksOperations";
import tasksSelectors from "../../redux/tasks/tasksSelectors";
import styles from "./TaskItem.module.css";

const TaskItem = ({ text, complited, onUpdate, onRemove }) => (
  <li className={complited ? styles.listItemChecked : styles.listItem}>
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
  const item = tasksSelectors.getTaskById(state, ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(removeTaskOperation(ownProps.id)),
  onUpdate: () => dispatch(toggleComplitedOperation(ownProps.id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);