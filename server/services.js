import { v4 } from "uuid";
import {todos} from "./db";

export function getTodos() {
  return todos;
}

export function getTodo(id) {
  return todos.find((todo) => todo.id === id);
}

export function createTodo({ title, completed }) {
  const newTodo = {
    id: v4(),
    title,
    completed: completed || false,
  };
  todos = [newTodo].concat(todos);
  return newTodo;
}

export function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  return id;
}

export function toggleTodo(id) {
  console.log(todos);
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  console.log(todos);
  return id;
}
