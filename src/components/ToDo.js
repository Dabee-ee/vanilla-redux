import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const hadleDeleteButton = () => {
    console.log(id);
    dispatch(deleteToDo(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={hadleDeleteButton}>DEL</button>
      </Link>
    </li>
  );
}

export default ToDo;
