import Ajax from '@/common/ajax'
import { getPostsListByListId } from '../reducers/posts'

export function loadPostsList({ id, filter = {} }) {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      let list = getPostsListByListId(getState(), id)

      list.loading = true
      list.filter = filter
      if (!list.data) list.data = []

      let variables = convertFilrerFormat(filter)

      if (!variables) {
        variables = ''
      } else {
        variables = `(${variables})`
      }

      // 储存 cookie
      let [err, data] = await Ajax({
        url: 'http://admin.xiaoduyu.com/graphql',
        method: 'post',
        data: {
          operationName: null,
          variables: {},
          query: `{
          posts${variables}{
            _id
            comment_count
            content_html
            title
            topic_id{
              _id
              name
            }
            type
            user_id{
              _id
              nickname
              brief
              avatar_url
            }
          }
        }`
        }
      })

      if (data && data.data) {
        list.loading = false

        let postsData = data.data[Reflect.ownKeys(data.data)[0]]

        if (postsData && postsData.length > 0) {
          list.data = list.data.concat(modifyList(postsData))
        }

        dispatch({ type: 'SET_POSTS_LIST_BY_NAME', id, data: list })
        resolve([null, list.data])
      } else {
        resolve(['loadPostList load failed'])
      }
    })
  }
}

const modifyList = data => {
  let arr = []
  data.map(item => {
    let text = item.content_html.replace(/<[^>]+>/g, '')
    if (text.length > 140) text = text.slice(0, 140) + '...'
    item.content_summary = text

    arr.push(item)
  })

  return arr
}

// 将参数对象转换成，GraphQL提交参数的格式
const convertFilrerFormat = params => {
  let arr = []
  for (let i in params) {
    let v = ''
    switch (typeof params[i]) {
      case 'string':
        v = '"' + params[i] + '"'
        break
      case 'number':
        v = params[i]
        break
      default:
        v = params[i]
    }
    arr.push(i + ':' + v)
  }
  return arr.join(',')
}
