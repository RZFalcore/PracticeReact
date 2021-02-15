import { createAction } from "@reduxjs/toolkit";

export const addTaskRequest = createAction("tasks/addTaskRequest");
export const addTaskSuccess = createAction("tasks/addTaskSuccess");
export const addTaskError = createAction("tasks/addTaskError");

export const fetchTasksRequest = createAction("tasks/fetchTasksRequest");
export const fetchTasksSuccess = createAction("tasks/fetchTasksSuccess");
export const fetchTasksError = createAction("tasks/fetchTasksError");

export const removeTaskRequest = createAction("tasks/removeTaskRequest");
export const removeTaskSuccess = createAction("tasks/removeTaskSuccess");
export const removeTaskError = createAction("tasks/removeTaskError");

export const toggleComplitedRequest = createAction(
  "tasks/toggleComplitedRequest"
);
export const toggleComplitedSuccess = createAction(
  "tasks/toggleComplitedSuccess"
);
export const toggleComplitedError = createAction("tasks/toggleComplitedError");

export const changeFilter = createAction("tasks/changeFilter");
