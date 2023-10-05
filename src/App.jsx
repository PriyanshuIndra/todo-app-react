import { useState } from "react";
import "./App.css";

// Importing Components
import Task from "./Components/Task";

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const inputHandler = (e) => {
    const task = e.target.value;
    setInput(task)
  }

  const submitHandler = (e) => {
    setTodos(prevTodos => {
      return [input, ...prevTodos]
    })
  }

  return (
    <>
      <div className="main">
        <h1>To-Do List</h1>
        <div className="todo-list">
          <input value={input} onChange={inputHandler} type="text" className="input" />
          <button onClick={submitHandler} className="btn">Submit</button>
        </div>
        <div className="todos">
          <h3>✅ Tasks</h3>
          {todos.map((eachTodo, index) => {
            return <Task key={index}>{eachTodo}</Task>
          })}
        </div>
      </div>
    </>
  );
}

export default App;
