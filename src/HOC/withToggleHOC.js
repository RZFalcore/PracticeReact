import React, { Component } from "react";

const withToggleHOC = (WrappedComponent) => {
  return class WithToggleHOC extends Component {
    state = { isOpen: false };

    handleToggle = () => this.setState((s) => ({ isOpen: !s.isOpen }));

    render() {
      const { isOpen } = this.state;

      return (
        <>
          <button onClick={this.handleToggle}>
            {isOpen ? "Hide" : "Show"}
          </button>
          {isOpen && <WrappedComponent {...this.props} />}
        </>
      );
    }
  };
};

export default withToggleHOC;
