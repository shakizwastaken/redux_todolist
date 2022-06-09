import "./app.css";
import Navbar from "./components/navbar/Navbar";
import TodosList from "./components/todosList/TodosList";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <TodosList />
      </div>
    </div>
  );
}

export default App;
