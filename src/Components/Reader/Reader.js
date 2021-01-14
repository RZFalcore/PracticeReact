import React, { Component, createContext } from "react";

const ReaderContext = createContext();

class Reader extends Component {
  static Consumer = ReaderContext.Consumer;

  state = {
    currentIndx: 0,
    publication: this.props.publications[0],
    totalPublications: this.props.publications.length
  };

  handlePrev = () => {
console.log('Prev');
}

handleNext = () => {
  
  console.log('Next');
  }
  render() {
    return (
      <ReaderContext.Provider value={{ ...this.state, onPrev : this.handlePrev, onNext: this.handleNext }}>
        <div className="reader">{this.props.children}</div>
      </ReaderContext.Provider>
    );
  }
}

export default Reader;
