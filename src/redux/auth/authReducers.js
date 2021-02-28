import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { getTokenSuccess, resetTokenSuccess } from "./authActions";

const getToken = (state, { payload }) => payload;
const resetToken = (state, { payload }) => null;

const token = createReducer(null, {
  [getTokenSuccess]: getToken,
  [resetTokenSuccess]: resetToken,
});

export default combineReducers({ token });
