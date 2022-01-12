import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Todos/Layout";
import Home from "./Todos/Home";
import AllTodos from "./Todos/AllTodos";
import NewTodo from "./Todos/NewTodo";
import Todo from "./Todos/Todo";
import ViewTodo from "./components/ViewTodo";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);

  const handleChangeForAddTodo = (event) => {
    setAddTodo(event.target.value);
  };

  const handleEDitChangeForTodo = (event) => {
    setEditTodo(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmitForAddTodo = () => {
    const newTodos = [...todos, addTodo];
    setTodos(newTodos);

    setAddTodo("");
  };

  const handleEditSubmitForTodo = (event) => {
    const editedTodo = editTodo;
    const newTodo = [...todos];

    const index = todos.findIndex((todo) => todo === todoEditing);

    newTodo[index] = editedTodo;

    setTodos(newTodo);
    setTodoEditing(null);
  };

  const handleEditClick = (event, todo) => {
    setTodoEditing(todo);
    setEditTodo(todo);
    console.log(todo);
  };

  const handleCancelClick = () => {
    setTodoEditing(null);
  };

  const handleDeleteClick = (_todo) => {
    const newTodos = todos.filter((todo) => todo !== _todo);
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        <center>
          <BrowserRouter>
            <Layout />
            <Routes>
              <Route
                path="Home"
                element={
                  <Home
                    todo={todos}
                    handleDeleteClick={handleDeleteClick}
                    handleEditClick={handleEditClick}
                  />
                }
              />

              <Route path="AllTodos" element={<AllTodos todos={todos} />} />

              <Route
                path="NewTodo"
                element={
                  <NewTodo
                    addTodo={addTodo}
                    handleChangeForAddTodo={handleChangeForAddTodo}
                    handleSubmitForAddTodo={handleSubmitForAddTodo}
                  />
                }
              />
              <Route
                path="Todo"
                element={
                  <Todo
                    todos={todos}
                    todoEditing={todoEditing}
                    editTodo={editTodo}
                    handleEDitChangeForTodo={handleEDitChangeForTodo}
                    handleEditSubmitForTodo={handleEditSubmitForTodo}
                    handleCancelClick={handleCancelClick}
                    handleDeleteClick={handleDeleteClick}
                    handleEditClick={handleEditClick}
                  />
                }
              />

              <Route exact path="/:id" element={<ViewTodo />} />
            </Routes>
          </BrowserRouter>
        </center>
      </div>
    </div>
  );
};

export default App;
