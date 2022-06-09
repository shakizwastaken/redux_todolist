import "./todoItem.css";

const TodoItem = ({ todo }) => {
  const { id, content } = todo;

  return <div className="todo-item">{content}</div>;
};

export default TodoItem;
