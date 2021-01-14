import React from "react";
import withReaderContext from "../../HOC/withReaderContext";

const Counter = ({  currentIndx, totalPublications  }) => (
  <p>
    {currentIndx + 1}/{totalPublications}
  </p>
);

export default withReaderContext(Counter);