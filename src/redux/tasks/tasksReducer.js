import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  // addTask,
  addTaskSuccess,
  removeTask,
  toggleComplited,
  changeFilter,
  addTaskRequest,
  addTaskError,
} from "./tasksActions";

const add = (state, action) => [...state, action.payload];

const remove = (state, action) =>
  state.filter(({ id }) => id !== action.payload);

const toggle = (state, action) =>
  state.map((task) =>
    task.id === action.payload ? { ...task, complited: !task.complited } : task
  );
const filterTask = (state, action) => action.payload;


const items = createReducer([], {
  [addTaskSuccess]: add,
  [removeTask]: remove,
  [toggleComplited]: toggle,
});

const filter = createReducer("", {
  [changeFilter]: filterTask,
});

const loading = createReducer(false, {
  [addTaskRequest]: () => true,
  [addTaskSuccess]: () => false,
  [addTaskError]: () => false,
});

export default combineReducers({ items, filter, loading });
