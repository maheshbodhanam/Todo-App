import React from "react";
import { Link } from "react-router-dom";

const AllTodos = ({ todos }) => {
  return (
    <div>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <h1>{todo}</h1>

            <Link to={`/${todo}`}>
              <button>View</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTodos;
