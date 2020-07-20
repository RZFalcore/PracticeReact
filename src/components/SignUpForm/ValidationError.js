import React from "react";
import PropTypes from "prop-types";

const style = { display: "block", color: "red" };

const ValidationError = ({ label }) => <label style={style}>{label}</label>;

ValidationError.propTypes = {
  label: PropTypes.object.isRequired,
};

export default ValidationError;
