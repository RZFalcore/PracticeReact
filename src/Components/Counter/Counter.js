import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <button type="button" onClick={handleIncrement}>
      Counter value: {counter}
    </button>
  );
};

export default Counter;
