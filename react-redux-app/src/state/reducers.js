// (3)
import * as types from './actionTypes';
// - rename the reducer, give it a unique name, expose it
// - make sure the reducer is a "pure" function
// - which takes state (slice) and an action as args
// - and returns FRESH NEW STATE (slice)
// - NO RANDOMNESS no uuid() no moment.js no Math.random()
// - we need a default parameter to supply the initial value for the slice
const initialValueCount = 0;
export function countReducer(count = initialValueCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return count + 1;
    case types.DECREMENT:
      return count - 1;
    case types.RESET:
      return 0;
    default:
      return count;
  }
}


const initialPopulation = { population: [] };

export function populationReducer (state = initialPopulation, action) {
  switch (action.type) {
    case types.DISPLAY_POPULATION:
      return {
        ...state,
        population: action.payload
      };
      default: 
      return state;
  }
}