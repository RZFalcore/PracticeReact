import React, { Component, createContext } from "react";

const ReaderContext = createContext();

class Reader extends Component {
  static Consumer = ReaderContext.Consumer;

  state = {
    currentIndx: 0,
    publication: this.props.publications[0],
  };

  //   componentDidMount() {
  //     this.setState({ publication: this.props.publications[0] });
  //   }

  render() {
    return (
      <ReaderContext.Provider value={{ ...this.state }}>
        <div className="reader">{this.props.children}</div>
      </ReaderContext.Provider>
    );
  }
}

export default Reader;
