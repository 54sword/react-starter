import React from 'react'

// 壳组件
import Shell from '@/components/shell'
import Meta from '@/components/meta'
import PostsList from '@/components/posts/list'

const Home = () => {
  return (
    <div>
      <Meta title='首页' />

      <PostsList
        id={'home'}
        filter={{
          sort_by: 'create_at',
          deleted: false,
          weaken: false
        }}
      />
    </div>
  )
}

Home.loadDataOnServer = async ({ store, match, res, req, user }) => {
  if (user) return { code: 200 }
  await PostsList.loadDataOnServer({ store, match, res, req, user })
  return { code: 200 }
}

export default Shell(Home)
