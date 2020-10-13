import { saveAccessToken, saveUserInfo, loadUserInfo } from '@/store/actions/user'
// 初始化数据
// redux 中的数据清理、以及准备一些经常不变的数据
export default async (store, accessToken) => {
  // 一些经常通用数据，不会经常更新的数据，在服务器获取并储存在store中
  if (accessToken) {
    // 储存用户信息
    // 储存access token
    const [err, user] = await loadUserInfo({ accessToken })(store.dispatch, store.getState)
    const obj = { id: '001', nickname: user }
    store.dispatch(saveAccessToken({ accessToken }))
    store.dispatch(saveUserInfo({ userinfo: obj }))
    return [err, obj]
  } else {
    return []
  }
}
