import React, { Component, createRef } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  wrapRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.code !== "Escape") return;

    this.props.onModalClose();
  };

  handleWrapClick = (e) => {
    const { current } = this.wrapRef;

    if (current && e.target !== current) return;

    this.props.onModalClose();
  };

  render() {
    const { children, onModalClose } = this.props;
    return (
      <div
        className={styles.wrap}
        ref={this.wrapRef}
        onClick={this.handleWrapClick}
      >
        <div className={styles.modal}>
          {children}
          <button onClick={onModalClose}>Close modal</button>
        </div>
      </div>
    );
  }
}
