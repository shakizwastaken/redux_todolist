import { createSlice } from "@reduxjs/toolkit";
import todo, { getTodoFromId } from "../todo";

//initial state.
let initialState = {
  todos: [new todo("This is an example todo...")],
};

//todos slice.
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //add a todo
    addTodo({ todos }, { payload: { content } }) {
      todos.push(new todo(content));
    },

    //delete a todo by its id
    deleteTodo({ todos }, { payload: { id } }) {
      console.log(getTodoFromId(todos, 1));
      todos.splice(getTodoFromId(todos, id), 1);
    },

    //toggle todo's isDone value
    toggleTodoDone({ todos }, { payload: { id } }) {
      return {
        todos: todos.map((item) => {
          if (item.id === id) item.toggleIsDone();
          return item;
        }),
      };
    },
  },
});

//action creators export.
export const { addTodo, deleteTodo, toggleTodoDone } = todosSlice.actions;

//export reducer as default.
export default todosSlice.reducer;
