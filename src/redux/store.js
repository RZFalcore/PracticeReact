import { time } from "faker";
import { createStore } from "redux";
import timerReducer from "./timerReducer";

// PLACEHOLDER REDUCER
// const reducer = (state = {}, action) => state;

const store = createStore(timerReducer);

export default store;
