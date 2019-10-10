import axios from 'axios';
import * as types from './actionTypes';

// const todosApi = 'http://localhost:4000/todos';
// const fruitsApi = 'http://localhost:4000/market/fruits';
// const meatsApi = 'http://localhost:4000/market/meats';
const populationApi = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'

// action creators here (7)
// THIS IS THE PLACE FOR NASTY, IMPURE THINGS
// like moment.js, uuid, Math.random, async...
// COMPONENTS AND REDUCERS SHOULD NOT DEAL WITH THAT STUFF!
export function increment() {
  return { type: types.INCREMENT };
}

export function decrement() {
  return { type: types.DECREMENT };
}

// export function displayPopulation (){

// }


// export fetchPopulation = () => dispatch => {
//   axios.get(populationApi)
//   .then(res => {

//   })
// }

// export function changeInput (target) {
//   return {
//     types: types.ON_POPULATION_CHANGE,
//     payload: {
//       value: target.value,

//     }
//   }
// }


