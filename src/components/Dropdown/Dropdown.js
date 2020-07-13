import React, { Component } from "react";
// import PropTypes from "prop-types";

class Dropdown extends Component {
  state = {
    isOpen: false,
  };

  // // static defaultProps = { isOpen: false };
  // static propTypes = {
  //   isOpen: PropTypes.bool,
  // };

  handleToggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };
  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleToggle}>
          DROPDOWN
        </button>
        {isOpen && (
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;
