import { combineReducers } from "redux";
import Type from "./tasksActionsTypes";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_TASK:
      return [...state, payload];
    case Type.REMOVE_TASK:
      return state.filter(({ id }) => id !== payload.id);
    case Type.TOGGLE_COMPLITED:
      return state.map((task) =>
        task.id === payload.id ? { ...task, complited: !task.complited } : task
      );
    default:
      return state;
  }
};
const filter = (state = "", action) => state;

export default combineReducers({ items, filter });
// changeFilter = (filter) => {
//   this.setState({ filter });
// };
