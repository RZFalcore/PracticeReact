import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import Type from "./tasksActionsTypes";

const addTask = createAction(Type.ADD_TASK, (text) => ({
  payload: { id: uuid(), text, complited: false },
}));

const removeTask = createAction(Type.REMOVE_TASK);

const toggleComplited = createAction(Type.TOGGLE_COMPLITED);

const changeFilter = createAction(Type.CHANGE_FILTER)

// Base Action Creators
// const addTask = (text) => ({
//   type: Type.ADD_TASK,
//   payload: {
//     id: uuid(),
//     text,
//     complited: false,
//   },
// });
// const removeTask = (id) => ({
//   type: Type.REMOVE_TASK,
//   payload: { id },
// });

// const toggleComplited = (id) => ({
//   type: Type.TOGGLE_COMPLITED,
//   payload: { id },
// });

// const changeFilter = (filter) => ({
//   type: Type.CHANGE_FILTER,
//   payload: { filter },
// });

export default {
  addTask,
  removeTask,
  toggleComplited,
  changeFilter,
};
