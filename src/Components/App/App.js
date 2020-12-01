import React, { Component } from "react";
import Modal from "../Modal/Modal";
import Chat from "../Chat/Chat";
import "./App.css";

export default class App extends Component {
  state = { isModalOpen: false };

  handleModalOpen = () =>
    this.setState((state) => ({ isModalOpen: !state.isModalOpen }));

  render() {
    const { isModalOpen } = this.state;
    return (
      <>
        <Chat />
        <button onClick={this.handleModalOpen}>Modal</button>
        {isModalOpen && (
          <Modal onModalClose={this.handleModalOpen}>
            <h1>Modal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              obcaecati fuga, adipisci accusantium sapiente quae reiciendis modi
              consequuntur eveniet ipsam tempora itaque ea porro omnis
              recusandae rem veniam delectus qui!
            </p>
          </Modal>
        )}
      </>
    );
  }
}
