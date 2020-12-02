import React, { Component, createRef } from "react";
import styles from "./MessageFeed.module.css";

export default class MessageFeed extends Component {
  listRef = createRef();

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    if (prevProps.items !== this.props.item) {
      const { scrollHeight, scrollTop, offsetHeight } = this.listRef.current;

      const distanceFromBottom = scrollHeight - (offsetHeight + scrollTop);

      return { shouldScroll: distanceFromBottom < 20 };
    }
    return null;
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot && snapshot.shouldScroll) {
      const listRef = this.listRef.current;
      listRef.scrollTop = listRef.scrollHeight;
    }
  }

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
