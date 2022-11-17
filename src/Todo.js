import { func } from "prop-types";
import React from "react";
import { TodoType } from "./Todo.type";

Todo.propTypes = {
  todo: TodoType,
  toggle: func
};

export default function Todo({ todo, toggle }) {
  return (
    <div className="todo card mt-2 p-2 pointer" onClick={toggle}>
      <label>
        <input type="checkbox" checked={todo.complete} className="mr-3" />
        {todo.text}
      </label>
    </div>
  );
}
