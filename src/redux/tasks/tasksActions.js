import { v4 as uuid } from "uuid";
import Type from "./tasksActionsTypes";

const addTask = (text) => ({
  type: Type.ADD_TASK,
  payload: {
    id: uuid(),
    text,
    complited: false,
  },
});
const removeTask = (id) => ({
  type: Type.REMOVE_TASK,
  payload: { id },
});

const toggleComplited = (id) => ({
  type: Type.TOGGLE_COMPLITED,
  payload: { id },
});

const changeFilter = (filter) => ({
  type: Type.CHANGE_FILTER,
  payload: { filter },
});

export default {
  addTask,
  removeTask,
  toggleComplited,
  changeFilter,
};
