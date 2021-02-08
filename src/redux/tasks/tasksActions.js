import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

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

export const addTask = createAction("tasks/addTask", (text) => ({
  payload: { id: uuid(), text, complited: false },
}));

export const removeTask = createAction("tasks/removeTask");

export const toggleComplited = createAction("tasks/toggleComplited");

export const changeFilter = createAction("tasks/changeFilter");
