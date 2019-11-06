import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../store/actions/todos";
import "./todo.css";

const Todos = () => {
  const dispatch = useDispatch();
  const TodosReducer = useSelector(state => state.TodosReducer);

  return (
    <ul className="ul">
      {TodosReducer.length > 0 ? (
        TodosReducer.map((todo, i) => (
          <li key={i} className="li">
            <button onClick={() => dispatch(removeTodo(i))} className="button">
              Feito
            </button>
            {todo}
          </li>
        ))
      ) : (
        <p>Nenhuma tarefa. Adicione uma.</p>
      )}
    </ul>
  );
};

export default Todos;
