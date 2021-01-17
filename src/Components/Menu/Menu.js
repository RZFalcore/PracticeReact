import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

export default class Menu extends Component {
  state = { isOpen: false };

  handleOpen = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="container">
        <button onClick={this.handleOpen}>&#9776;</button>

        <CSSTransition
          in={isOpen}
          timeout={2000}
          classNames="fade"
          unmountOnExit
        >
          <div className="dropdown">
            <ul className="list">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
