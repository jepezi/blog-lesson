import merge from 'lodash/merge';

function greeting(state = [], action) {
  if (action.type === 'greeting') {
    return [ ...state, action.payload.name ];
  }

  return state;
}

function counter(state = 0, action) {
  if (action.type === 'counter') {
    return state + 1
  }

  return state;
}

const reducers = (state = {}, action) => {
  return {
    greeting: greeting(state.greeting, action),
    counter: counter(state.counter, action),
  }
}

export default reducers;
