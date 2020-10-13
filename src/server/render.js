// 服务端渲染依赖
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'
import { Provider } from 'react-redux'
import MetaTagsServer from 'react-meta-tags/server'
import { MetaTagsContext } from 'react-meta-tags'
import { ChunkExtractor } from '@loadable/server'

// 创建redux store
import createStore from '@/store'
// 路由组件
import createRouter from '@/router'
// 加载初始数据
import initData from '@/init-data'

import { auth_cookie_name, debug } from 'Config'

export default async (req, res) => {
  const params = {
    code: 200,
    redirect: '',
    html: '',
    meta: '',
    reduxState: '{}',
    user: null
  }

  // 创建新的store
  let store = createStore()

  const accessToken = req.cookies[auth_cookie_name] || ''
  const [err, user] = await initData(store, accessToken)

  params.user = user

  let router = createRouter({ user })

  let route = null
  let match = null

  router.list.some(_route => {
    const _match = matchPath(req.path, _route)
    if (_match) {
      _match.search = req._parsedOriginalUrl.search || ''
      route = _route
      match = _match
    }
    return _match
  })

  if (route.enter === 'tourists' && user) {
    // 游客
    params.code = 403
    params.redirect = '/'
    return params
  } else if (route.enter === 'member' && !user) {
    // 注册会员
    params.code = 403
    params.redirect = '/'
    return params
  }

  // if (route.loadData) {
  //   // 服务端加载数据，并返回页面的状态
  //   const { code, redirect } = await route.loadData({ store, match, res, req, user })
  //   params.code = code
  //   params.redirect = redirect
  // }

  const nodeStats = path.resolve('./dist/server/loadable-stats.json')
  const webStats = path.resolve('./dist/client/loadable-stats.json')

  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats, entrypoints: ['app'] })
  const webExtractor = new ChunkExtractor({ statsFile: webStats, entrypoints: ['app'] })

  // 获取路由dom
  const Page = router.dom

  await route.body.preload()
  const p = await route.body.load()
  if (p.default.loadDataOnServer) {
    // console.log('xxxxxxxxxx')
    const { code, redirect } = await p.default.loadDataOnServer({
      store,
      match,
      res,
      req,
      user
    })
    params.code = code
    params.redirect = redirect
  }

  const metaTagsInstance = MetaTagsServer()

  // console.log(webExtractor.getScriptTags(), 'webExtractor', nodeExtractor.getLinkTags(), 'nodeExtractor', webExtractor.getStyleTags())

  // html
  params.html = ReactDOMServer.renderToString(
    webExtractor.collectChunks(
      <Provider store={store}>
        <MetaTagsContext extract={metaTagsInstance.extract}>
          <StaticRouter location={req.url}>
            <Page />
          </StaticRouter>
        </MetaTagsContext>
      </Provider>
    )
  )

  // 获取页面的meta，嵌套到模版中
  params.meta = metaTagsInstance.renderToString()

  // console.log(metaTagsInstance.renderToString(), 'metaTagsInstance.renderToString()')

  params.debug = debug

  // redux
  params.reduxState = JSON.stringify(store.getState()).replace(/</g, '\\x3c')

  // 释放store内存
  store = null
  router = null

  return params
}
