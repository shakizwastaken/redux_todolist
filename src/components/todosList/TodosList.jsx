import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../todoItem/TodoItem";

import "./todosList.css";

const TodosList = () => {
  const { todos } = useSelector((state) => state.todos);

  const [dTodos, setDTodos] = useState([]);

  useEffect(() => {
    setDTodos(todos);
  }, [todos]);

  const renderTodos = () => {
    return dTodos.map((todo) => <TodoItem key={todo.id} todo={{ ...todo }} />);
  };

  return (
    <div className="todo-list-container">
      {dTodos.length ? (
        <div className="todo-list">{renderTodos()}</div>
      ) : (
        <h1>Your current todos will be shown here...</h1>
      )}
    </div>
  );
};

export default TodosList;
