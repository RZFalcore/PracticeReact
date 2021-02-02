import React from "react";
import Layout from "../Layout/Layout";
import TaskEditor from "../TaskEditor/TaskEditor";
import TaskFilter from "../Filter/Filter";
import TaskList from "../TaskList/TaskList";

function App() {
  return (
    <div>
      <Layout>
        <TaskEditor />
        <TaskFilter />
        <TaskList />
      </Layout>
    </div>
  );
}

export default App;
