import React from "react";
import PropTypes from "prop-types";

const PrioritySelector = ({ options, priority, onChange }) => (
  <select name="priority" value={priority} onChange={onChange}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

PrioritySelector.propTypes = {
  priority: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PrioritySelector;
