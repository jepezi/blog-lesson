import merge from 'lodash/merge';
import posts from './posts';

/**
 * 'greeting' reducer
 *
 *  Handle: 'greeting' action type
 */
function greeting(state = [], action) {
  if (action.type === 'greeting') {
    return [ ...state, action.payload.name ];
  }

  return state;
}

/**
 * 'counter' reducer
 *
 *  Handle: 'counter' action type
 */
function counter(state = 0, action) {
  if (action.type === 'counter') {
    return state + 1
  }

  return state;
}

/**
 * 'entities' reducer
 *
 *  Handle: all action that has 'payload' key
 *
 * After normalized, action payload will contain entities object. entities reducer will merge every action that has 'entities'.
 */
function entities(state = {}, action) {
  // TODO: check if action payload has entities, then merge it with current state.

  return state;
}

/**
 * Main reducers function
 * @method reducers
 * @param  {object} state    current state
 * @param  {object} action   action that is dispatched
 * @return {object}          redux state tree with each key managed by different sub-reducers
 */
const reducers = (state = {}, action) => {
  return {
    greeting: greeting(state.greeting, action),
    counter: counter(state.counter, action),
    posts: posts(state.posts, action),
    // TODO: add entities reducer
  }
}

export default reducers;
