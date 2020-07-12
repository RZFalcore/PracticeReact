import React, { Component } from "react";
import PropTypes from "prop-types";

class Dropdown extends Component {
  state = {};

  static defaultProps = { isOpen: false };
  static propTypes = {
    isOpen: PropTypes.bool,
  };
  render() {
    return (
      <div>
        <button type="button">Push</button>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
          <li>User 4</li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;
