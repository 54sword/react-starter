import React, { useEffect } from 'react'
import { useRouteMatch, useLocation } from 'react-router-dom'
import { useStore, useSelector } from 'react-redux'

import { loadPostsList } from '@/store/actions/posts'
import { getPostsListByListId } from '@/store/reducers/posts'

import Shell from '@/components/shell'
import Meta from '@/components/meta'
import Loading from '@/components/ui/loading'

const PostsDetail = () => {
  const location = useLocation()
  const {
    params: { id }
  } = useRouteMatch()
  const store = useStore()
  const list = useSelector(state => getPostsListByListId(state, id))

  const { loading, data } = list || {}
  const posts = data && data[0] ? data[0] : null

  useEffect(() => {
    const getData = args => loadPostsList(args)(store.dispatch, store.getState)
    console.log(list, 'list')
    if (!posts) {
      getData({
        id,
        filter: {
          _id: id
        }
      })
    }
  }, [list.data, store.dispatch, store.getState])

  return (
    <div>
      {loading ? <Loading /> : null}

      <Meta title={posts ? posts.title : '加载中...'} />

      {posts ? (
        <div className='jumbotron'>
          <h1 className='display-4'>{posts.title}</h1>
          <p className='lead'>{posts.topic_id.name}</p>
          <hr className='my-4' />
          {posts.content_html ? <div dangerouslySetInnerHTML={{ __html: posts.content_html }} /> : null}
        </div>
      ) : null}
    </div>
  )
}

PostsDetail.loadDataOnServer = async ({ store, match, res, req, user }) => {
  if (user) return { code: 200 }
  const { id } = match.params
  const [err, data] = await loadPostsList({
    id: id,
    filter: {
      _id: id,
      deleted: false,
      weaken: false
    }
  })(store.dispatch, store.getState)

  // 没有找到帖子，设置页面 http code 为404
  if (err || data.length == 0) {
    return { code: 404 }
  } else {
    return { code: 200 }
  }
}

export default Shell(PostsDetail)
