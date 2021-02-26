import axios from "axios";
import { getTokenRequest, getTokenSuccess, getTokenError } from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

export const registrationOperation = (userData) => (dispatch) => {
  dispatch(getTokenRequest());

  axios
    .post("/users/signup", userData)
    .then((res) => dispatch(getTokenSuccess(res.data.token)))
    .catch((e) => dispatch(getTokenError(e)));
};
