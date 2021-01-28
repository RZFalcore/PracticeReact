import { createStore } from "redux";
import { Provider } from "react-redux";

const reducer = (state = {}, action) => state;
const store = createStore(reducer);

//-----------------------------------------------------------------
// Actions
// const action = {
//   type: "ADD_NOTE",
//   payload: {
//     text: "Redux add note.",
//   },
// };
const addNote = (text) => ({
  type: "ADD_NOTE",
  payload: {
    id: Date.now(),
    text,
  },
});
const deleteNote = (id) => ({
  type: "DELETE_NOTE",
  payload: {
    id,
  },
});
//-----------------------------------------------------------------
// Reducers
const initialState = [];

function noteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload.id);
    default:
      return state;
  }
}
