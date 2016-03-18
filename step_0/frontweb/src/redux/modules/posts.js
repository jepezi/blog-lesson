import superfetch from '../../lib/superfetch';
import handleActions from '../../lib/redux-actions/handleActions';

// NOTE: import normalizr
import { Schema, arrayOf } from 'normalizr';

// TODO: Change array to object with this shape { isLoading, ids }
const initialState = [];

/** ------------------------------------------------------------
 * Reducer
 * ------------------------------------------------------------
 */

// 'posts' reducer
//
// NOTE: handleActions accepts reducer map object and initialState.
// It returns reducer function that handles each action type in the map.
// Also support handling each sequence type, start, next, throw.
// So instead of creating function like
//
// function posts(state, action) {
//   ...
// }
//
// and handle action type and sequence type manually,
// we use handleActions helper.
export default handleActions({
  'posts/get': {
    start: state => state, // TODO: override isLoading: true
    next: (state, action) => {
      console.warn('[in reducer]', action);

      // TODO: override isLoading: false
      // TODO: override ids with action payload's result
      return [
        ...state,
        ...action.payload
      ]
    }
  }
}, initialState)


/** ------------------------------------------------------------
 * Action Creator
 * ------------------------------------------------------------
 */

// TODO: create post schema

export function getPosts() {
  return (dispatch, getState) => {
    const posts = getState().posts; // TODO: check length of posts.ids instead
    if (posts.length > 1) return;

    return dispatch({
      type: 'posts/get',
      payload: superfetch('http://reacttraining.multiplej.com/api/v1/posts'),
      // TODO: add 'arrayOf' schema in meta key
    });
  }
}
