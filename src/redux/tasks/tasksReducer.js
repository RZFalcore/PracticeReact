import { combineReducers } from "redux";
import Type from "./tasksActionsTypes";

const items = (state = [], action) => state;
const filter = (state = "", action) => state;

export default combineReducers({ items, filter });
// state = {
//   tasks: [],
//   filter: "",
// };

// addTask = (task) => {
//   const newTask = {
//     id: uuid(),
//     text: task,
//     complited: false,
//   };
//   this.setState((state) => ({ tasks: [...state.tasks, newTask] }));
// };

// removeTask = (taskId) => {
//   this.setState((state) => ({
//     tasks: state.filter(({ id }) => id !== taskId),
//   }));
// };

// updateComplited = (taskId) => {
//   this.setState((state) => ({
//     tasks: state.tasks.map((task) =>
//       task.id === taskId ? { ...task, complited: !task.complited } : task
//     ),
//   }));
// };

// changeFilter = (filter) => {
//   this.setState({ filter });
// };
