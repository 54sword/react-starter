import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'

// 服务端渲染依赖
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'
import { Provider } from 'react-redux'
import MetaTagsServer from 'react-meta-tags/server'
import { MetaTagsContext } from 'react-meta-tags'
import Loadable from 'react-loadable'

// 路由配置
import configureStore from '@/store'
// 路由组件
import createRouter from '@/router'
// 路由初始化的redux内容
import { initialStateJSON } from '@/store/reducers'
import { saveAccessToken, saveUserInfo } from '@/store/actions/user'

// 配置
import { port, auth_cookie_name } from 'Config'
import sign from './sign'
// import webpackHotMiddleware from './webpack-hot-middleware';

const app = express()

// ***** 注意 *****
// 不要改变如下代码执行位置，否则热更新会失效
// 开发环境开启修改代码后热更新

// if (process.env.NODE_ENV === 'development') {
// webpackHotMiddleware(app);
// }

// console.log(process.env.NODE_ENV);

// app.set("view engine","ejs");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// app.use(express.static('./dist'));
app.use(express.static('./dist/client'))
// app.use(express.static('./'));

// console.log(express.static(__dirname + '/dist'));

app.use(function(req, res, next) {
  // 计算页面加载完成花费的时间
  var exec_start_at = Date.now()
  var _send = res.send
  res.send = function() {
    // 发送Header
    res.set('X-Execution-Time', String(Date.now() - exec_start_at) + ' ms')
    // 调用原始处理函数
    return _send.apply(res, arguments)
  }
  next()
})

// 登录、退出
app.use('/sign', sign())

app.get('*', async (req, res) => {
  let store = configureStore(JSON.parse(initialStateJSON))
  let user = null
  let accessToken = req.cookies[auth_cookie_name] || ''

  // 验证 token 是否有效
  if (accessToken) {
    // 这里可以去查询 accessToken 是否有效
    // your code
    // 这里假设如果有 accessToken ，那么就是登录用户，将他保存到redux中
    user = { id: '001', nickname: accessToken }
    // 储存用户信息
    store.dispatch(saveUserInfo({ userinfo: user }))
    // 储存access token
    store.dispatch(saveAccessToken({ accessToken }))
  }

  const router = createRouter(user)

  let _route = null,
    _match = null

  router.list.some(route => {
    let match = matchPath(req.url.split('?')[0], route)
    if (match && match.path) {
      _route = route
      _match = match
      return true
    }
  })

  let context = {
    code: 200
    // url
  }

  // console.log(_route.component);
  // console.log(_route.component.loadData);

  if (_route.loadData) {
    context = await _route.loadData({ store, match: _match })
    // console.log(context);
  }

  await _route.component.preload()

  // await Loadable.preloadAll();

  // 获取路由dom
  const _Router = router.dom
  const metaTagsInstance = MetaTagsServer()

  let _mainContent = (
    <Provider store={store}>
      <MetaTagsContext extract={metaTagsInstance.extract}>
        <StaticRouter location={req.url} context={context}>
          <_Router />
        </StaticRouter>
      </MetaTagsContext>
    </Provider>
  )

  // html
  let html = ReactDOMServer.renderToString(_mainContent)

  // 获取页面的meta，嵌套到模版中
  let meta = metaTagsInstance.renderToString()

  let reduxState = JSON.stringify(store.getState()).replace(/</g, '\\x3c')

  if (context.code == 302) {
    res.writeHead(302, {
      Location: context.url
    })
  } else {
    res.status(context.code)
    res.render('../dist/server/index.ejs', { html, reduxState, meta })
  }

  res.end()

  // 释放store内存
  store = null
})

app.listen(port)
console.log('server started on port ' + port)
