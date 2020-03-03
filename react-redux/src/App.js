import React from "react";
import Counter from './components/counter';
import "./App.css";
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './state/reducers';

export default function App() {
  const monsterReducer = combineReducers({
    // the key is the real name for the slice of state
    count: reducers.countReducer,
  });
  const store = createStore(
    monsterReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );


  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
