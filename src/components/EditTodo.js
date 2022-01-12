import React from "react";

const EditTodo = ({
  editTodo,
  handleEDitChangeForTodo,
  handleEditSubmitForTodo,
  handleCancelClick,
}) => {
  return (
    <div>
      <tr>
        <td>
          <input
            type="text"
            value={editTodo}
            onChange={handleEDitChangeForTodo}
          />
        </td>
        <td>
          &nbsp;&nbsp;
          <button onClick={handleEditSubmitForTodo}>save</button>
          <button onClick={handleCancelClick}>cancel</button>
        </td>
      </tr>
    </div>
  );
};

export default EditTodo;
