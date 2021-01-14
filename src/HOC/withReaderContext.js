import React from "react";
import Reader from "../Components/Reader/Reader";

const withReaderContext = (BaseComponent) => (props) => (
  <Reader.Consumer>
    {(context) => <BaseComponent {...props} {...context} />}
  </Reader.Consumer>
);

export default withReaderContext;
