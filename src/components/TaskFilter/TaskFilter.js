import React from "react";
import PropTypes from "prop-types";

import style from "./TaskFilter.module.css";

const TaskFilter = ({ value, onUpdateFilter }) => {
  return (
    <div className={style.inputDiv}>
      <input
        type="text"
        className={style.filterInput}
        placeholder="Type query"
        onChange={onUpdateFilter}
        value={value}
      />
      <hr />
    </div>
  );
};

TaskFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onUpdateFilter: PropTypes.func.isRequired,
};

export default TaskFilter;
