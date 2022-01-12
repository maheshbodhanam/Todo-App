import React from "react";

const Todo = ({ todo, handleEditClick, handleDeleteClick }) => {
  return (
    <div>
      <tr>
        <td>
          <div>
            <h5>{todo}</h5>
          </div>
        </td>
        <td>
          <button
            type="button"
            onClick={(event) => handleEditClick(event, todo)}
          >
            Edit
          </button>
          <button type="button" onClick={() => handleDeleteClick(todo)}>
            Delete
          </button>
        </td>
      </tr>
    </div>
  );
};

export default Todo;
