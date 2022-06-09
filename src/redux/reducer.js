import { createSlice } from "@reduxjs/toolkit";
import todo, { getTodoFromId } from "../todo";

//initial state.
const initialState = {
  todos: [new todo("this is an example todo...")],
};

//todos slice.
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //add a todo
    addTodo({ todos }, { content }) {
      todos.push(new todo(content));
    },

    //delete a todo by its id
    deleteTodo({ todos }, { id }) {
      todos.splice(getTodoFromId(todos, id), 1);
    },

    //toggle todo's isDone value
    toggleTodoDone({ todos }, { id }) {
      const index = getTodoFromId(todos, id);
      todos[index] = todos[index].toggleIsDone();
    },
  },
});

//action creators export.
export const { addTodo, deleteTodo, toggleTodoDone } = todosSlice.actions;

//export reducer as default.
export default todosSlice.reducer;
