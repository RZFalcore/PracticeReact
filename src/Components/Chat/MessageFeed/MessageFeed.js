import React, { Component, createRef } from "react";
import styles from "./MessageFeed.module.css";

export default class MessageFeed extends Component {
  listRef = createRef();

  render() {
    return (
      <ul className={styles.list} ref={this.listRef}>
        {this.props.items.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <p>{item.text}</p>
            <p>
              <b>Created at: </b>
              {new Date(item.createdAt).toLocaleString()}
            </p>
            <hr />
          </li>
        ))}
      </ul>
    );
  }
}
