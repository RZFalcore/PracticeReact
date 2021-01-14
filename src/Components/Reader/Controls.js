import React from "react";
import Reader from "./Reader";

const Controls = () => (
  <Reader.Consumer>
    {({ onPrev, onNext }) => (
      <section className="controls">
        <button className="button" onClick={onPrev}>
          Back
        </button>
        <button className="button" onClick={onNext}>
          Forward
        </button>
      </section>
    )}
  </Reader.Consumer>
);

export default Controls;
