import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { changeStep } from "../../redux/stepActions";

const options = [
  { value: 1, label: 1 },
  { value: 10, label: 10 },
  { value: 100, label: 100 },
];

const StepSelector = ({ value, onChange }) => (
  <Select options={options} value={value} onChange={onChange} />
);

const mapStateToProps = (state) => ({
  value: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (step) => dispatch(changeStep(step)),
});


export default connect(mapStateToProps, mapDispatchToProps)(StepSelector);