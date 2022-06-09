import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducer";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
