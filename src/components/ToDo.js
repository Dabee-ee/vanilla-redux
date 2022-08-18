import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";

function ToDo({ text, id }) {
  const dispatch = useDispatch();
  const hadleDeleteButton = () => {
    console.log(id);
    dispatch(deleteToDo(id));
  };
  return (
    <li>
      {text} <button onClick={hadleDeleteButton}>DEL</button>
    </li>
  );
}

export default ToDo;
