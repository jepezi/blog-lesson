import merge from 'lodash/merge';
import posts from './posts';

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

// NOTE: after normalized, action payload will contain entities object.
// entities reducer will merge every action that has 'entities'.
function entities(state = {}, action) {
  // TODO: check if action payload has entities, then merge it with current state.

  return state;
}

const reducers = (state = {}, action) => {
  return {
    greeting: greeting(state.greeting, action),
    counter: counter(state.counter, action),
    posts: posts(state.posts, action),
    // TODO: add entities reducer
  }
}

export default reducers;
