import React from "react";

const NewTodo = ({
  addTodo,
  handleChangeForAddTodo,
  handleSubmitForAddTodo,
}) => {
  return (
    <div>
      <div>
        <input
          type="text"
          name="todo"
          value={addTodo}
          onChange={handleChangeForAddTodo}
          placeholder="Enter Your Todo"
        />
        &nbsp;&nbsp;
        <button onClick={handleSubmitForAddTodo}>Add</button>
      </div>
    </div>
  );
};

export default NewTodo;
