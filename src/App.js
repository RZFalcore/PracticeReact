import React, { Component } from "react";
import shortid from "shortid";

import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskEditor from "./components/TaskEditor/TaskEditor";
import TaskList from "./components/TaskList/TaskList";
import Modal from "./components/ModalApp/ModalApp";
import { tasksFilter } from "./utils/TaskFilter";

export default class App extends Component {
  state = {
    tasks: [],
    filter: "",
  };

  componentDidMount() {
    const dataFromLC = localStorage.getItem("tasks");
    dataFromLC && this.setState({ tasks: JSON.parse(dataFromLC) });
  }

  componentDidUpdate(prevProps, prevState) {
    const tasks = this.state.tasks;
    if (prevState.tasks !== tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  addTask = (task) => {
    const taskToAdd = {
      ...task,
      id: shortid.generate(),
      completed: false,
    };

    this.setState((prevState) => ({ tasks: [...prevState.tasks, taskToAdd] }));
  };

  deleteTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  };

  updateComplited = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  updatePriority = (id, priority) => {
    this.setState((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, priority } : task
      ),
    }));
  };

  updateFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { tasks, filter } = this.state;

    const filteredTasks = tasksFilter(tasks, filter);

    return (
      <div>
        <TaskFilter value={filter} onUpdateFilter={this.updateFilter} />
        <TaskEditor onTaskAdd={this.addTask} />
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={this.deleteTask}
          onUpdateComplited={this.updateComplited}
          onUpdatePriority={this.updatePriority}
        />
        <footer>
        <hr  />
          <Modal />
        </footer>
      </div>
    );
  }
}
