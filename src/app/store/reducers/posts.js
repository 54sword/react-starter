import cloneObj from '../clone'

const initialState = {}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_POSTS_LIST_BY_NAME':
      const { id, data } = action
      state[id] = data
    default:
      return state
  }
  return cloneObj(state)
}

export const getPostsListByListId = (state, id) => {
  return state.posts[id] ? state.posts[id] : {}
}
