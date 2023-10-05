import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <h1>To-Do List</h1>
        <div className="todo-list">
          <input type="text" className="input" />
          <button className="btn">Submit</button>
        </div>
        <div className="todos">
          <h3>Tasks </h3>
        </div>
      </div>
    </>
  );
}

export default App;
