import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import tasksActions from "./tasksActions";

const add = (state, action) => [...state, action.payload];
const remove = (state, action) =>
  state.filter(({ id }) => id !== action.payload);
const toggle = (state, action) =>
  state.map((task) =>
    task.id === action.payload ? { ...task, complited: !task.complited } : task
  );
const filter = (state, action) => action.payload;

const tasksReducer = createReducer([], {
  [tasksActions.addTask]: add,
  [tasksActions.removeTask]: remove,
  [tasksActions.toggleComplited]: toggle,
});

const filterReducer = createReducer("", {
  [tasksActions.changeFilter]: filter,
});
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case tasksActions.addTask.type:
//       return [...state, payload];
//     case tasksActions.removeTask.type:
//       return state.filter(({ id }) => id !== payload);
//     case tasksActions.toggleComplited.type:
//       return state.map((task) =>
//         task.id === payload ? { ...task, complited: !task.complited } : task
//       );
//     default:
//       return state;
//   }
// };
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case tasksActions.changeFilter.type:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({ items: tasksReducer, filter: filterReducer });
