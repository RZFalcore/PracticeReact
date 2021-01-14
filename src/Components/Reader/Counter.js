import React from "react";
import Reader from "./Reader";

const Counter = () => (
  <Reader.Consumer>
    {({ currentIndx, totalPublications }) => (
      <p>
        {currentIndx + 1}/{totalPublications}
      </p>
    )}
  </Reader.Consumer>
);

export default Counter;
