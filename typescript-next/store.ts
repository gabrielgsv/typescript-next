import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";

export function initializeStore(initialState = {}) {
  return createStore(reducer, initialState, composeWithDevTools());
}