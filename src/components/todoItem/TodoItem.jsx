import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoDone } from "../../redux/reducer";

import "./todoItem.css";

const TodoItem = ({ todo }) => {
  const { id, content, isDone } = todo;

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleDoubleClick = () => {
    dispatch(toggleTodoDone({ id }));
  };

  return (
    <div
      className={`todo-item noselect ${isDone && "done"}`}
      onDoubleClick={handleDoubleClick}
    >
      <p className="todo-item-content">{content}</p>
      <button className="delete-todo-item" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default TodoItem;
