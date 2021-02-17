import React from "react";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/tasks/tasksActions";
import tasksSelectors from "../../redux/tasks/tasksSelectors";

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
  value: tasksSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onFilterChange: changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
