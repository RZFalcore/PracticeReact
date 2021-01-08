import React from "react";
import withToggleHOC from "../../HOC/withToggleHOC";
import withLog from "../../HOC/withLog";

const Title = ({ title = "Hello there!" }) => <h1>{title}</h1>;

export default withLog(withToggleHOC(Title));
