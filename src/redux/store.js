import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import tasksReducer from "./tasks/tasksReducer";
import counterReducer from "./counter/counterReducer";
import authReducer from "./auth/authReducers";

const authPersistConfig = {
  key: "authToken",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    user: persistedAuthReducer,
    tasks: tasksReducer,
    counter: counterReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;
