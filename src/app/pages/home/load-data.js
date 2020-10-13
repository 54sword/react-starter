import { loadPostsList } from '@/store/actions/posts'

export default ({ store, match }) => {
  return new Promise(async function (resolve, reject) {
    /* 敲黑板～ 这里是重点～～～～～～～～～～～（为了引起你的注意，我写了这句话）*/

    /**
     * 这里的 loadPostsList 方法，是在服务端加载 posts 数据，储存到 redux 中。
     * 这里对应的组件是 PostsList，PostsList组件里面也有 loadPostsList 方法，但它是在客户端执行。
     * 然后，服务端在渲染 PostsList 组件的时候，我们会先判断如果redux中，是否存在该条数据，如果存在，直接拿该数据渲染
     */

    await loadPostsList({
      id: 'home',
      filter: {
        sort_by: 'create_at',
        deleted: false,
        weaken: false
      }
    })(store.dispatch, store.getState)

    resolve({ code: 200 })
  })
}
