import { useSelector } from "react-redux";
import TodoItem from "../todoItem/TodoItem";
import "./todosList.css";

const TodosList = () => {
  const { todos } = useSelector((state) => state.todos);

  console.log(todos);

  const renderTodos = () => {
    return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  };

  return (
    <div className="todos-list">
      {todos.length ? (
        renderTodos()
      ) : (
        <h1>Your current todos will be shown here...</h1>
      )}
    </div>
  );
};

export default TodosList;
