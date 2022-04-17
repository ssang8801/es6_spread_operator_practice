import React from "react";
// import Todo from "./Todo.jsx";
import TodoList from "../todo.js";

// TodoList.push("hello");

function App() {
  const [todo0, todoChange0] = React.useState("");
  const [todo, todoChange] = React.useState([]);

  function dpItem(props) {
    return <li>{props}</li>;
  }

  function dpItemLinker() {
    return <dpItem />;
  }

  function Todo() {
    return (
      <div>
        <ul>{todo.map(dpItem)}</ul>
      </div>
    );
  }
  function changeHandler(event) {
    todoChange0(event.target.value);
  }

  function changeHandler2() {
    todoChange((prevItems) => {
      return [...prevItems, todo0];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} type="text" />
        <button onClick={changeHandler2}>
          <span>Add</span>
        </button>
      </div>
      <Todo />
    </div>
  );
}

export default App;
