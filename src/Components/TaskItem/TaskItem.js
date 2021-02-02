import React from "react";

const TaskItem = ({ id, text }) => (
  <li key={id}>
    <p>{text}</p>
  </li>
);

export default TaskItem;
