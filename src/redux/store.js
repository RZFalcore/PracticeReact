import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/tasksReducer";

const loggerMiddleWare = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("Dispatch: ", action);
  console.groupEnd(action.type);

  next(action);
};

const store = configureStore({
  reducer: { tasks: tasksReducer },
  enhancer: [loggerMiddleWare],
});

export default store;
