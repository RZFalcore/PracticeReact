import React, { Component } from "react";
import StepSelector from "../StepSelector/StepSelector";
import Timer from "../Timer/TimerContainer";
class App extends Component {
  state = {};
  
  render() {
    return (
      <div
        style={{
          width: "400px",
          margin: "40px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        App
        <Timer />
        <StepSelector />
      </div>
    );
  }
}


export default App;