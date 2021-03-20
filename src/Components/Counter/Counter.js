import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    return () => {
      console.log("Counter updated.");
    };
  }, [counter]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const [text, setText] = useState("");
  useEffect(() => {
    console.log(text);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" name="text" value={text} onChange={handleTextChange} />
      <button type="button" onClick={handleIncrement}>
        Counter value: {counter}
      </button>
    </>
  );
};

export default Counter;
