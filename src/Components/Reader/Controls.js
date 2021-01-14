import React from "react";
import withReaderContext from "../../HOC/withReaderContext";

const Controls = ({ onPrev, onNext }) => {
  return (
    <section className="controls">
      <button className="button" onClick={onPrev}>
        Back
        </button>
      <button className="button" onClick={onNext}>
        Forward
        </button>
    </section>
  );
};

export default withReaderContext(Controls);
