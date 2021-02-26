import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { getTokenSuccess } from "./authActions";

const getToken = (state, { payload }) => payload;

const token = createReducer(null, {
  [getTokenSuccess]: getToken,
});

export default combineReducers({ token });
