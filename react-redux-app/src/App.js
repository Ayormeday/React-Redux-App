import React from "react";
import Population from "./components/Population";
import "./App.css";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as reducers from "./state/reducers";
import Search from "./components/Search";

export default function App() {
  const monsterReducer = combineReducers({
    population: reducers.populationReducer,
    search: reducers.searchReducer
  });
  const store = createStore(
    monsterReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return (
    <Provider store={store}>
      <Search />
      <Population />
    </Provider>
  );
}
