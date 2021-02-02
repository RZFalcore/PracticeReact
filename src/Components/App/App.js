import React, { Component } from "react";
import Layout from "../Layout/Layout";
import TaskEditor from '../TaskEditor/TaskEditor';
import TaskFilter from '../Filter/Filter';
import TaskList from '../TaskList/TaskList'
class App extends Component {
  
  getFilteredTasks = () => {
    const { tasks, filter } = this.state;

    return tasks.filter((task) =>
      task.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (<div>
          {/* <Layout  >
            <TaskEditor />
            <TaskFilter />
            <TaskList/>   
          </Layout> */}
        </div>);
  }
}


export default App;