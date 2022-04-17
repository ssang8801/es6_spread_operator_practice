import React from "react";
import TodoList from "../todo.js";

function dpItem(props) {
  return <li>{props}</li>;
}

function dpItemLinker() {
  return <dpItem />;
}

function Todo() {
  return (
    <div>
      <ul>{TodoList.map(dpItem)}</ul>
    </div>
  );
}

export default Todo;
