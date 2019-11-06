import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todos";
import Todos from "../components/todo/Todos";
import "./index.css";

const Home = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>(null);

  const onSubmit = e => {
    e.preventDefault();
    setValue("");
    dispatch(addTodo(value));
  };
  return (
    <div className="container">
      <div className="content">
        <form>
          <div className="inputButton">
          <input
            className="input"
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit" onClick={e => onSubmit(e)}>
            Adicionar
          </button>
          </div>
        </form>
        <Todos />
      </div>
    </div>
  );
};

export default Home;
