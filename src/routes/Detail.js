import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const id = useParams().id;
  const toDos = useSelector((state) => state);
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  console.log(toDo);

  return (
    <>
      <h1>{toDo.text}</h1>
      <h1>{toDo.createdAt}</h1>
    </>
  );
};

export default Detail;
