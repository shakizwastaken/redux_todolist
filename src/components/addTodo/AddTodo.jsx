import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducer";

import "./addTodo.css";

const AddTodo = () => {
  const [value, setValue] = useState(""); //input state

  const dispatch = useDispatch();

  const handleChange = (e) => {
    //set state value to current input value
    setValue(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key !== "Enter") return;

    //handleSubmit
    handleSubmit();
  };

  const handleSubmit = () => {
    if (!value.trim()) return;
    //dispatch addTodo action
    dispatch(addTodo({ content: value }));

    //clear input's value
    setValue("");
  };

  return (
    <div className="addTodo-container shadow radius">
      <input
        placeholder="something to do..."
        value={value}
        onChange={handleChange}
        onKeyDown={handleKey}
      />

      <button onClick={handleSubmit}>create todo</button>
    </div>
  );
};

export default AddTodo;
