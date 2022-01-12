import React from "react";
import { useParams } from "react-router-dom";

function ViewTodo() {
  const { id } = useParams();

  return (
    <div className="viewcardcss">
      <h1>{id}</h1>
    </div>
  );
}

export default ViewTodo;
