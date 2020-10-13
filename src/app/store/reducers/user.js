import cloneObj from '../clone'

const initialState = {}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_ACCESS_TOKEN':
      state.accessToken = action.accessToken
      return state

    case 'SAVE_USERINFO':
      state.userinfo = action.userinfo
      return state

    default:
      return state
  }

  return cloneObj(state)
}

// 获取 access token
export const getAccessToken = state => state.user.accessToken

// 获取用户信息
export const getUserInfo = state => state.user.userinfo || {}
