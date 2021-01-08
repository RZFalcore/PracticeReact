import React, { Component } from "react";

const withLog = (WrapComponent) => {
  return class WithLog extends Component {
    componentDidMount() {
      console.group(`Component ${WrapComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }
    render() {
      return <WrapComponent {...this.props} />;
    }
  };
};

export default withLog;
