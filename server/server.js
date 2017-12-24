import express from 'express'
import bodyParser from 'body-parser'
import compress from 'compression'

// 服务端渲染依赖
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '../src/store'
// 路由组件
import { RouteArr, Router } from '../src/router'

// 配置
import config from '../config'

const app = express()

// webpack热更新
const runWebpack = ()=>{

  // https://github.com/glenjamin/webpack-hot-middleware/blob/master/example/server.js
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.development.config.js')
  const compiler = webpack(webpackConfig)

  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }))

  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }))
}

if (process.env.NODE_ENV === 'development') runWebpack()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
app.use(express.static(__dirname + '/../dist'))

app.get('*', async function(req, res){

  const store = configureStore({})

  const context = {
    'test': 'test'
  }

  let _route = null,
      _match = null

  // console.log(req.url);

  RouteArr.some(route => {
    let match = matchPath(req.url, route)

    // console.log(match);

    if (match && match.path) {
      _route = route
      _match = match
      return
    }
  })

  // if (!_route || !_match) {
  //   let reduxState = JSON.stringify(store.getState())
  //   res.render('../dist/index.ejs', { html: '', reduxState })
  //   res.end()
  //   return
  // }

  if (_route && _match && _route.loadData) {
    let result = await _route.loadData({ store, match: _match })
  }
  
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Router />
      </StaticRouter>
    </Provider>
  )

  let reduxState = JSON.stringify(store.getState())
  // .replace(/</g, '\\x3c');

  // if (context.url) {
  //   res.writeHead(301, {
  //     Location: context.url
  //   })
  //   res.end()
  // } else {
    res.render('../dist/index.ejs', { html, reduxState })
    res.end()
  // }
})

app.listen(config.port);
console.log('server started on port ' + config.port);
