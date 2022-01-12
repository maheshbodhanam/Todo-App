import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/Home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AllTodos">
            AllTodos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/NewTodo">
            NewTodo
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Todo">
            Todo
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Layout;
