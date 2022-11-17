import React from "react";
import { arrayOf, func } from "prop-types";
import { TodoType } from "./Todo.type";
import Todo from "./Todo";

TodoList.propTypes = {
  todos: arrayOf(TodoType).isRequired,
  toggle: func
};

export default function TodoList({ todos, toggle }) {
  return (
    <div className="pt-2 pb-2">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggle={() => toggle(todo.id)} />
      ))}
    </div>
  );
}
