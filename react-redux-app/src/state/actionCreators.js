import axios from "axios";
import * as types from "./actionTypes";

const populationApi =
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

export function setPopulation(population) {
  return {
    type: types.SET_POPULATION,
    payload: population
  };
}

export const getPopulation = () => dispatch => {
  let population;
  axios.get(populationApi).then(res => {
    population = res.data;
    dispatch(setPopulation(population));
  });
};

export function onSearchChange(searchInput) {
  return {
    type: types.ON_SEARCH_CHANGE,
    payload: searchInput
  };
}
