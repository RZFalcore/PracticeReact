import { Type } from "./stepActions";

const stepReducer = (state = { value: 1, label: 1 }, action) => {
  switch (action.type) {
    case Type.CHANGE_STEP:
      return action.payload;
    default:
      return state;
  }
};

export default stepReducer;
