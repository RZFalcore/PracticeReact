import React, { Component } from "react";
import Dropdown from "./Dropdown/Dropdown";
import Counter from "./Counter/Counter";
import MessageUpdater from "./MessageUpdater/MessageUpdater";

class App extends Component {
  state = {
    message: "Initial message",
  };

  updateMessage = () => {
    this.setState({ message: `Updated message at ${Date.now()}` });
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <p>{message}</p>
        <MessageUpdater updateMessage={this.updateMessage} />
        <div>
          <h1>Hello world!</h1>
          <Counter value={1} step={1} />
          <Dropdown />
        </div>
      </div>
    );
  }
}

export default App;

// const App = () => (
//   <div>
//     <h1>Hello world!</h1>
//     <Counter value={1} step={1} />
//     <Dropdown />
//     <MessageUpdater />
//   </div>
// );

// export default App;
