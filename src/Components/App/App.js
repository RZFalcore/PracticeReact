import React from "react";
import TaskEditor from "../TaskEditor/TaskEditor";
import Filter from "../Filter/Filter";
import TaskList from "../TaskList/TaskList";

function App() {
  return (
    <div>
      <TaskEditor />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;
