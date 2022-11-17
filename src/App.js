import "./styles.css";

import TodoList from "./TodoList";
import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

export default function App() {
  const [todos, setTodos] = useState([]);

  const inputRefNewTodo = useRef();

  function handleAddTodo() {
    // grab text from input
    const text = inputRefNewTodo.current.value;

    if (text === "") {
      return;
    }

    // new todo
    const todo = { text, id: uuid(), complete: false };

    // add it to the list
    const newTodos = [...todos, todo];

    // clear the input
    inputRefNewTodo.current.value = "";

    // return its focus
    inputRefNewTodo.current.focus();

    // render
    setTodos(newTodos);
  }

  function handleToggleTodo(id) {
    // grab todos
    const currentTodos = [...todos];

    // find todo
    const todo = currentTodos.find((todo) => todo.id === id);

    // toggle it
    todo.complete = !todo.complete;

    // render
    setTodos(currentTodos);
  }

  function handleClearTodos() {
    // grab non complete todos
    const currentTodos = todos.filter((todo) => !todo.complete);

    if (currentTodos.length === todos.length) {
      return;
    }

    //render
    setTodos(currentTodos);
  }

  return (
    <div className="App p-3">
      <progress
        class="progress is-primary"
        value={todos.filter((t) => t.complete).length}
        max={todos.length}
      ></progress>
      <div className="list-title">
        <strong>Todo list</strong>
        <div className="tag">
          Pending tasks: {todos.filter((todo) => !todo.complete).length}
        </div>
        <button
          className="button is-danger is-small"
          onClick={handleClearTodos}
        >
          Clear
        </button>
      </div>
      <div>
        <input
          type="text"
          className="input"
          ref={inputRefNewTodo}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleAddTodo();
          }}
        />
      </div>
      <div className="mt-2">
        <button
          className="button is-primary float-right"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <div className="mt-4">
        <TodoList todos={todos} toggle={handleToggleTodo} />
      </div>
    </div>
  );
}
