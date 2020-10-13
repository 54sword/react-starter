import Ajax from '@/common/ajax'

// 储存accessToken到redux
export function saveAccessToken({ accessToken }) {
  return dispatch => {
    dispatch({ type: 'SAVE_ACCESS_TOKEN', accessToken })
  }
}

export function saveUserInfo({ userinfo }) {
  return dispatch => {
    dispatch({ type: 'SAVE_USERINFO', userinfo })
  }
}

export function loadUserInfo({ accessToken }) {
  console.log(accessToken, '---')
  return async (dispatch, getState) => {
    dispatch({ type: 'SAVE_USER_INFO', data: accessToken })
    return [null, accessToken]
  }
}

export function signIn({ nickname }) {
  return async () => {
    // 这里写你的登录请求，登录成功以后，将token储存到cookie，使用httpOnly(比较安全)
    // your code ...
    // 储存 cookie
    let [err, data] = await Ajax({
      url: window.location.origin + '/sign/in',
      method: 'post',
      data: {
        nickname: nickname
      }
    })

    if (data && data.success) {
      return [null, true]
    } else {
      return ['sign error']
    }
  }
}

export function signOut() {
  return async () => {
    const [err, data] = await Ajax({
      url: window.location.origin + '/sign/out',
      method: 'post'
    })

    if (data && data.success) {
      return [null, true]
    } else {
      return ['signOut error']
    }
  }
}
