import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

import configureStore from '../src/store'
import { Router } from '../src/router'

if ('serviceWorker' in navigator) {
  const registration = runtime.register();
} else {
  console.log("Don't support serviceWorker")
}

// 从页面中获取服务端生产redux数据，作为客户端redux初始值
const store = configureStore(window.__initState__)

if (__DEV__) {
  // 开发模式下，首屏内容会使用服务端渲染的html代码，
  // 而热更新代码是客户端代码，清空app里面的html，强制用客户端的代码作为显示
  document.getElementById('app').innerHTML = ''
}

ReactDOM.hydrate((
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'))
