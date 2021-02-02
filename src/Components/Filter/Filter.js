import React from "react";
import { connect } from "react-redux";
import tasksActions from "../../redux/tasks/tasksActions";

const Filter = ({ value, onFilterChange }) => (
  <div>
    <input
      type="text"
      className="TaskEditor-input"
      value={value}
      onChange={(e) => onFilterChange(e.target.value)}
    />
  </div>
);

const mapStateToProps = (state) => ({
  value: state.tasks.filter,
});

const mapDispatchToProps = {
  onFilterChange: tasksActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);