import { createAction } from "@reduxjs/toolkit";

export const getTokenRequest = createAction("auth/getTokenRequest");
export const getTokenSuccess = createAction("auth/getTokenSuccess");
export const getTokenError = createAction("auth/getTokenError");

export const resetTokenRequest = createAction("auth/resetTokenRequest");
export const resetTokenSuccess = createAction("auth/resetTokenSuccess");
export const resetTokenError = createAction("auth/resetTokenError");
