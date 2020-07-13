import React from "react";

const MessageUpdater = ({ updateMessage }) => (
  <button type="button" onClick={updateMessage}>
    Update message
  </button>
);

export default MessageUpdater;
