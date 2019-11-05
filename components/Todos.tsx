import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const dispatch = useDispatch();
  const TodosReducer = useSelector(state => state.TodosReducer);

  return (
    <ul>
      {TodosReducer.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>
  );
};

export default Todos;
