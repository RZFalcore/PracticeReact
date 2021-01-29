import React from "react";

const Timer = ({ value, step, onIncrement, onDecrement }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      width: "400px",
      margin: "10px auto",
      padding: "0px",
    }}
  >
    <button
      onClick={() => onDecrement(step)}
      style={{ border: "0", backgroundColor: "white", padding: "4px" }}
    >
      &#8722;
    </button>
    <p style={{ minWidth: "40px", textAlign: "center", margin: "0px" }}>
      {value}
    </p>
    <button
      onClick={() => onIncrement(step)}
      style={{ border: "0", backgroundColor: "white", padding: "4px" }}
    >
      &#43;
    </button>
  </div>
);

export default Timer;