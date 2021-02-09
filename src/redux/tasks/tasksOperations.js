import axios from "axios";
import { addTaskRequest, addTaskSuccess, addTaskError } from "./tasksActions";

export const addTaskOperation = (text) => (dispatch) => {
  dispatch(addTaskRequest());
  axios
    .post("http://localhost:3001/tasks", { text, complited: false })
    .then((res) => {
      console.log(res);
      dispatch(addTaskSuccess(res.data));
    })
    .catch((err) => dispatch(addTaskError(err)));
};
