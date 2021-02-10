import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addTaskSuccess,
  toggleComplited,
  changeFilter,
  addTaskRequest,
  addTaskError,
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
  removeTaskRequest,
  removeTaskSuccess,
  removeTaskError,
} from "./tasksActions";

// const fetchTasks = (state, action) => action.payload;
const fetchTasks = (state, action) => action.payload;

const add = (state, action) => [...state, action.payload];

const remove = (state, action) =>
  state.filter(({ id }) => id !== action.payload);

const toggle = (state, action) =>
  state.map((task) =>
    task.id === action.payload ? { ...task, complited: !task.complited } : task
  );
const filterTask = (state, action) => action.payload;


const items = createReducer([], {
  [fetchTasksSuccess]: fetchTasks,
  [addTaskSuccess]: add,
  [removeTaskSuccess]: remove,
  [toggleComplited]: toggle,
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
});

export default combineReducers({ items, filter, loading });
