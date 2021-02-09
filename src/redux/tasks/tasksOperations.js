import axios from "axios";
import {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
  removeTaskRequest,
  removeTaskSuccess,
  removeTaskError,
} from "./tasksActions";

export const addTaskOperation = (text) => (dispatch) => {
  dispatch(addTaskRequest());
  axios
    .post("http://localhost:3001/tasks", { text, complited: false })
    .then((res) => {
      dispatch(addTaskSuccess(res.data));
    })
    .catch((err) => dispatch(addTaskError(err)));
};

// Operation is optional)
export const fetchTasksOperation = () => (dispatch) => {
  dispatch(fetchTasksRequest());
  axios
    .get("http://localhost:3001/tasks")
    .then(({ data }) => {
      console.log(data);
      return dispatch(fetchTasksSuccess(data));
    })
    .catch((e) => dispatch(fetchTasksError(e)));
};

export const removeTaskOperation = (id) => (dispatch) => {
  dispatch(removeTaskRequest());
  axios
    .delete(`http://localhost:3001/${id}`)
    .then((res) => {
      console.log(res);
      return dispatch(removeTaskSuccess({ id: id }));
    })
    .catch((e) => dispatch(removeTaskError(e)));
};
