import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import runtime from 'serviceworker-webpack-plugin/lib/runtime'

import configureStore from '../src/store'
import { Router } from '../src/router'



// if ('serviceWorker' in navigator) {
//   const registration = runtime.register();
// } else {
//   console.log("Don't support serviceWorker")
// }

// 从页面中获取服务端生产redux数据，作为客户端redux初始值
const store = configureStore(window.__initState__)

ReactDOM.hydrate((
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'))
