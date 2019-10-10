import * as types from "./actionTypes";

const initialPopulation = {};
export function populationReducer(state = initialPopulation, action) {
  switch (action.type) {
    case types.SET_POPULATION:
      return action.payload;
    default:
      return state;
  };
};

const initialSearch = "";
export function searchReducer(state = initialSearch, action) {
  switch (action.type) {
    case types.ON_SEARCH_CHANGE:
      return action.payload;
    default:
      return state;
  };
};
