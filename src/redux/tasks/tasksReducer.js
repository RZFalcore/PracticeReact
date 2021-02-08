import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addTask,
  removeTask,
  toggleComplited,
  changeFilter,
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
  [addTask]: add,
  [removeTask]: remove,
  [toggleComplited]: toggle,
});

const filter = createReducer("", {
  [changeFilter]: filterTask,
});


export default combineReducers({ items, filter });
