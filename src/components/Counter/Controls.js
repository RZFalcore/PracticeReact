import React from "react";
import PropTypes from "prop-types";

const Controls = ({ step, onIncrement, onDecrement }) => (
  <>
    <button type="button" onClick={onIncrement}>
      Inc + {step}
    </button>
    <button type="button" onClick={onDecrement}>
      Dec - {step}
    </button>
  </>
);

Controls.propTypes = {
  step: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
