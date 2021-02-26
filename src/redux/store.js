import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks/tasksReducer";
import counterReducer from "./counter/counterReducer";
import authReducer from "./auth/authReducers";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: { user: authReducer, tasks: tasksReducer, counter: counterReducer },
  middleware: [thunk],
});

export default store;
