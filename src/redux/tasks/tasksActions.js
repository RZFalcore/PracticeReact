import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const addTask = createAction("tasks/addTask", (text) => ({
  payload: { id: uuid(), text, complited: false },
}));

export const removeTask = createAction("tasks/removeTask");

export const toggleComplited = createAction("tasks/toggleComplited");

export const changeFilter = createAction("tasks/changeFilter");
