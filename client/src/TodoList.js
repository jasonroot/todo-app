import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList() {

  // set the state for the todos and setTodos using useState
  const [todos, setTodos] = useState([
    { task: "create todo app", completed: false },
    { task: "create pull request", completed: false }
  ]);

  // adding a new todo from the form and adding it to the todos object
  const create = (newTodo) => {
    // using a spread operator that makes a copy of the todos object with the new todo
    setTodos([...todos, newTodo]);
  };
  

  // loop through our todos and create todo component
  const todosList = todos.map((todo) => (
    // todo component
    <Todo 
      todo={todo}
    />
  ));

  return (
    <div>
      <h1>Biproxi Todo List</h1>
      <ul>
        <li>{todosList}</li>
      </ul>
      <NewTodoForm createTodo={create} />
    </div>
  );
}

export default TodoList;
