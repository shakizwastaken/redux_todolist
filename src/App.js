import "./app.css";
import AddTodo from "./components/addTodo/AddTodo";
import Navbar from "./components/navbar/Navbar";
import TodosList from "./components/todosList/TodosList";

function App() {
  return (
    <div className="app">
      <div className="container shadow radius">
        <Navbar />
        <AddTodo />
        <TodosList />
      </div>
    </div>
  );
}

export default App;
