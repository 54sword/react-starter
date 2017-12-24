
import merge from 'lodash/merge'

let initialState = {
  profile: {},
  unreadNotice: 0,
  accessToken: '123rrr'
}

export default function account(state = initialState, action) {

  switch (action.type) {
    case 'UPDATE':
      state.accessToken = action.text
      return merge({}, state, {})

    default:
      return state
  }

}

export function getAccessToken(state) {
  return state.account
}
