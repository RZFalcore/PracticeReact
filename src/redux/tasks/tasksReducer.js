import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
  removeTaskRequest,
  removeTaskSuccess,
  removeTaskError,
  toggleComplitedRequest,
  toggleComplitedSuccess,
  toggleComplitedError,
  changeFilter,
} from "./tasksActions";

const fetchTasks = (state, action) => action.payload;

const add = (state, action) => [...state, action.payload];

const remove = (state, action) =>
  state.filter(({ id }) => id !== action.payload);

const toggle = (state, action) =>
  state.map((task) => (task.id === action.payload.id ? action.payload : task));

const filterTask = (state, action) => action.payload;


const items = createReducer([], {
  [fetchTasksSuccess]: fetchTasks,
  [addTaskSuccess]: add,
  [removeTaskSuccess]: remove,
  [toggleComplitedSuccess]: toggle,
});

const filter = createReducer("", {
  [changeFilter]: filterTask,
});

const loading = createReducer(false, {
  [fetchTasksRequest]: () => true,
  [fetchTasksSuccess]: () => false,
  [fetchTasksError]: () => false,
  [addTaskRequest]: () => true,
  [addTaskSuccess]: () => false,
  [addTaskError]: () => false,
  [removeTaskRequest]: () => true,
  [removeTaskSuccess]: () => false,
  [removeTaskError]: () => false,
  [toggleComplitedRequest]: () => true,
  [toggleComplitedSuccess]: () => false,
  [toggleComplitedError]: () => false,
});

export default combineReducers({ items, filter, loading });
