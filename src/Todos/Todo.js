import React from "react";
import { Fragment } from "react";

import TodoItem from "../components/TodoItem";
import EditTodo from "../components/EditTodo";

const Todo = ({
  handleCancelClick,
  todos,
  todoEditing,
  editTodo,
  handleEDitChangeForTodo,
  handleEditSubmitForTodo,
  handleDeleteClick,
  handleEditClick,
}) => {
  return (
    <div>
      <table>
        {todos.map((todo, i) => (
          <Fragment key={i}>
            {todoEditing === todo ? (
              <EditTodo
                editTodo={editTodo}
                handleEDitChangeForTodo={handleEDitChangeForTodo}
                handleEditSubmitForTodo={handleEditSubmitForTodo}
                handleCancelClick={handleCancelClick}
              />
            ) : (
              <TodoItem
                todo={todo}
                handleDeleteClick={handleDeleteClick}
                handleEditClick={handleEditClick}
              />
            )}
          </Fragment>
        ))}
      </table>
    </div>
  );
};

export default Todo;
