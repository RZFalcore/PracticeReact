import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const addTask = createAction("tasks/addTask", (text) => ({
  payload: { id: uuid(), text, complited: false },
}));

const removeTask = createAction("tasks/removeTask");

const toggleComplited = createAction("tasks/toggleComplited");

const changeFilter = createAction("tasks/changeFilter");

export default {
  addTask,
  removeTask,
  toggleComplited,
  changeFilter,
};
