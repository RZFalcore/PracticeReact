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
  toggleComplitedRequest,
  toggleComplitedSuccess,
  toggleComplitedError,
} from "./tasksActions";

axios.defaults.baseURL = "http://localhost:3001";

export const addTaskOperation = (text) => (dispatch) => {
  dispatch(addTaskRequest());
  axios
    .post("/tasks", { text, complited: false })
    .then((res) => {
      dispatch(addTaskSuccess(res.data));
    })
    .catch((err) => dispatch(addTaskError(err)));
};

export const fetchTasksOperation = () => (dispatch) => {
  dispatch(fetchTasksRequest());
  axios
    .get("/tasks")
    .then(({ data }) => {
      return dispatch(fetchTasksSuccess(data));
    })
    .catch((e) => dispatch(fetchTasksError(e)));
};

export const removeTaskOperation = (id) => (dispatch) => {
  dispatch(removeTaskRequest());
  axios
    .delete(`/tasks/${id}`)
    .then(() => dispatch(removeTaskSuccess(id)))
    .catch((e) => dispatch(removeTaskError(e)));
};

export const toggleComplitedOperation = (id) => (dispatch) => {
  dispatch(toggleComplitedRequest());
  axios
    .patch(`/tasks/${id}`, { complited: true })
    .then(({ data }) => dispatch(toggleComplitedSuccess(data)))
    .catch((e) => dispatch(toggleComplitedError(e)));
};