import merge from 'lodash/merge';

let initialState = {};

export default function posts(state = initialState, action = {}) {
  switch (action.type) {

    case 'SET_POSTS':
      return merge({}, action.state, {});

    case 'SET_POSTS_LIST_BY_NAME':
      var { id, data } = action;
      state[id] = data;
      return merge({}, state, {});

    default:
      return state;
  }
}

export const getPostsListByListId = (state, id) => {
  return state.posts[id] ? state.posts[id] : {};
}
