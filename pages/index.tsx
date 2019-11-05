import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todos";
import Todos from "../components/Todos";

const Home = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>(null);

  const onSubmit = e => {
    e.preventDefault();
    setValue("");
    dispatch(addTodo(value));
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <form>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit" onClick={e => onSubmit(e)}>
          Adicionar
        </button>
      </form>
      <Todos />
    </div>
  );
};

export default Home;
