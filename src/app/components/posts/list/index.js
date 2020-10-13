import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useStore, useSelector } from 'react-redux'
import { loadPostsList } from '@/store/actions/posts'
import { getPostsListByListId } from '@/store/reducers/posts'

import './style.scss'

const PostsList = ({ id, filter }) => {
  const store = useStore()
  const list = useSelector(state => getPostsListByListId(state, id))

  const { loading, data } = list

  useEffect(() => {
    const getData = args => loadPostsList(args)(store.dispatch, store.getState)
    if (!data) {
      getData({
        id,
        filter
      })
    }
  }, [data, store.dispatch, store.getState])

  return (
    <div>
      {loading ? <div>loading...</div> : null}
      <div className='list-group'>
        {data &&
          data.map((item, index) => (
            <Link
              key={item._id + index}
              to={`/posts/${item._id}`}
              className='list-group-item list-group-item-action flex-column align-items-start'
            >
              <p className='mb-1'>
                <img src={item.user_id.avatar_url} styleName='avatar' />
                {item.user_id.nickname}
              </p>
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>{item.title}</h5>
                <small>{item.topic_id.name}</small>
              </div>
              <p className='mb-1'>{item.content_summary}</p>
              <small>{item.comment_count > 0 ? `有${item.comment_count}人评论` : null}</small>
            </Link>
          ))}
      </div>
    </div>
  )
}

PostsList.propTypes = {
  // 要获取的列表的id
  id: PropTypes.string.isRequired,
  // 筛选条件
  filter: PropTypes.object.isRequired
}

PostsList.loadDataOnServer = async ({ store, match, res, req, user }) => {
  await loadPostsList({
    id: 'home',
    filter: {
      sort_by: 'create_at',
      deleted: false,
      weaken: false
    }
  })(store.dispatch, store.getState)
}

export default PostsList
