import React from "react";

const Timer = ({ value, onIncrement, onDecrement }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      width: "400px",
      margin: "10px auto",
    }}
  >
    <button onClick={onDecrement}>&#8722;</button>
    <p style={{ minWidth: "40px", textAlign: "center" }}>{value}</p>
    <button onClick={onIncrement}>&#43;</button>
  </div>
);

export default Timer;
