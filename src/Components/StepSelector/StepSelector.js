import React from "react";
import Select from "react-select";


const options = [
  { value: 1, label: 1 },
  { value: 10, label: 10 },
  { value: 100, label: 100 },
];

const StepSelector = ({ value, onChange }) => (
  <Select options={options} value={value} onChange={onChange} />
);

export default StepSelector;