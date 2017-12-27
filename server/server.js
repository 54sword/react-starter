import express from 'express'
import bodyParser from 'body-parser'
import compress from 'compression'

// 服务端渲染依赖
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'
// import { matchPath } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '../src/store'
// 路由组件
import { RouteArr, Router } from '../src/router'


// 配置
import config from '../config'

const app = express()


// https

/*
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./https/private.pem', 'utf8');
var certificate = fs.readFileSync('./https/file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

var PORT = 18080;
var SSLPORT = config.port;

httpServer.listen(PORT, function() {
    console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});
*/


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


  RouteArr.some(route => {
    let match = matchPath(req.url.split('?')[0], route)
    if (match && match.path) {
      _route = route
      _match = match
      return true
    }
  })

  // if (!_route || !_match) {
  //   let reduxState = JSON.stringify(store.getState())
  //   res.render('../dist/index.ejs', { html: '', reduxState })
  //   res.end()
  //   return
  // }

  let result = null

  // console.log(_match);

  if (_route && _match && _route.loadData) {
    result = await _route.loadData({ store, match: _match })
  }

  let html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Router />
      </StaticRouter>
    </Provider>
  )

  // console.log(html);

  let reduxState = JSON.stringify(store.getState()).replace(/</g, '\\x3c');

  // if (context.url) {
  //   res.writeHead(301, {
  //     Location: context.url
  //   })
  //   res.end()
  // } else {
  //

  if (process.env.NODE_ENV === 'development') {
    html = ''
  }

    res.render('../dist/index.ejs', { html, reduxState })
    res.end()
  // }
})

app.listen(config.port);
console.log('server started on port ' + config.port)
