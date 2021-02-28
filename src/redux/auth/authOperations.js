import axios from "axios";
import {
  getTokenRequest,
  getTokenSuccess,
  getTokenError,
  resetTokenRequest,
  resetTokenSuccess,
  resetTokenError,
} from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

export const registrationOperation = (userData) => (dispatch) => {
  dispatch(getTokenRequest());

  axios
    .post("/users/signup", userData)
    .then((res) => dispatch(getTokenSuccess(res.data.token)))
    .catch((e) => dispatch(getTokenError(e)));
};

export const loginOperation = (userData) => (dispatch) => {
  dispatch(getTokenRequest());
  axios
    .post("/users/login", userData)
    .then((res) => dispatch(getTokenSuccess(res.data.token)))
    .catch((e) => dispatch(getTokenError(e)));
};

export const logOutOperation = (token) => (dispatch) => {
  dispatch(resetTokenRequest());

  axios({
    url: "/users/logout",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(() => dispatch(resetTokenSuccess()))
    .catch((e) => dispatch(resetTokenError(e)));
};