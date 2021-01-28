import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import "./index.css";

import App from "./Components/App/App";

console.log(store);

ReactDOM.render(<App />, document.getElementById("root"));
