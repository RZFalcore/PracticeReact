import { createAction } from "@reduxjs/toolkit";
// No need for id, created at backend
// import { v4 as uuid } from "uuid";

//----------------------------------------------------------------------------
// Operation 
// const fetchData = () => dispatch => {
//   fetch().then(data => dispatch({ type: "fetchData", payload: data }))
// }
//----------------------------------------------------------------------------
// Redux Thunk
// const reduxThunk = store => next => action => {
//   if (typeof action === "function") {
//     action(store.dispatch, store.getState);
//     return 
//   }
//   next(action)
// }
//----------------------------------------------------------------------------

export const addTaskRequest = createAction("tasks/addTaskRequest");
export const addTaskSuccess = createAction("tasks/addTaskSuccess");
export const addTaskError = createAction("tasks/addTaskError");

// Moved to operation
// export const addTask = createAction("tasks/addTask", (text) => ({
//   payload: { id: uuid(), text, complited: false },
// }));

export const fetchTasksRequest = createAction("tasks/fetchTasksRequest");
export const fetchTasksSuccess = createAction("tasks/fetchTasksSuccess");
export const fetchTasksError = createAction("tasks/fetchTasksError");

export const removeTaskRequest = createAction("tasks/removeTaskRequest");
export const removeTaskSuccess = createAction("tasks/removeTaskSuccess");
export const removeTaskError = createAction("tasks/removeTaskError");


export const removeTask = createAction("tasks/removeTask");

export const toggleComplited = createAction("tasks/toggleComplited");

export const changeFilter = createAction("tasks/changeFilter");
