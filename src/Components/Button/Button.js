import React from "react";

const Button = ({ label, onCLick }) => (
  <button onClick={onCLick}>{label}</button>
);

export default Button;
