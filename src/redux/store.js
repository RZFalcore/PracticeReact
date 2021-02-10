// import {createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/tasksReducer";
// import logger from "redux-logger";

// const defaultMiddlewares = getDefaultMiddleware();

// Middleware example
//---------------------------------------------------------
// const loggerMiddleware = (store) => (next) => (action) => {
  //   console.group(action.type);
  //   console.info("Dispatching: ", action);
  //   console.groupEnd(action.type);
  // };
//---------------------------------------------------------

const store = configureStore({
  reducer: { tasks: tasksReducer },
  // middleware: [...defaultMiddlewares, logger],
});

export default store;