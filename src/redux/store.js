import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import timerReducer from "./timerReducer";

// PLACEHOLDER REDUCER
// const reducer = (state = {}, action) => state;

const store = createStore(timerReducer, devToolsEnhancer());

export default store;
