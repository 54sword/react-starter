
import express from 'express'
import bodyParser from 'body-parser'
import compress from 'compression'
import { Provider } from 'react-redux'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { matchPath } from 'react-router-dom'

import configureStore from '../src/store'

import Router from '../src/router'
import routerList from '../src/router/list'

import Promise from 'promise'

import { port } from '../config'

const app = express()

// Step 1: Create & configure a webpack compiler
const webpack = require('webpack')
const webpackConfig = require('../webpack.development.config.js')
const compiler = webpack(webpackConfig)

if (process.env.NODE_ENV === 'development') {

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));

}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(compress())
app.use(express.static(__dirname + '/../dist'))

app.get('*', async function(req, res){

  const store = configureStore({})

  // console.log(store)

  const context = {
    'test': 'test'
  }

  let _route = null,
      _match = null

  routerList.some(route => {
    let match = matchPath(req.url, route)
    if (match) {
      _route = route
      _match = match
    }
  })

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

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.render('../dist/index.ejs', { html, reduxState })
    res.end()
  }
})

app.listen(port);
console.log('server started on port ' + port);
