import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Editor from "./Editor/Editor";
import MessageFeed from "./MessageFeed/MessageFeed";

export default class Chat extends Component {
  state = {
    messages: [
      {
        id: "1",
        text: "Hello!",
        createdAt: new Date().toISOString(),
      },
    ],
  };

  addMessage = (text) => {
    const message = {
      id: uuidv4(),
      text,
      createdAt: new Date().toISOString(),
    };
    this.setState((state) => ({ messages: [...state.messages, message] }));
  };

  render() {
    const { messages } = this.state;
    return (
      <div
        style={{
          overflow: "hidden",
          width: "600px",
          height: "460px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <MessageFeed items={messages} />
        <Editor onAddMessage={this.addMessage} />
      </div>
    );
  }
}
