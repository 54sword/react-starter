import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../store';
import createRouter from '../router';

// 引入全局样式
import '../pages/global.scss';

// [todo]
// import runtime from 'serviceworker-webpack-plugin/lib/runtime'
// if ('serviceWorker' in navigator) {
//   const registration = runtime.register();
// } else {
//   console.log("Don't support serviceWorker")
// }

// 从页面中获取服务端生产redux数据，作为客户端redux初始值
const store = configureStore(window.__initState__);

import { getUserInfo } from '../reducers/user';

let userinfo = getUserInfo(store.getState());

if (!userinfo || !userinfo.id) {
  userinfo = null;
}

const RouterDom = createRouter(userinfo).dom;

ReactDOM.hydrate((
  <Provider store={store}>
    <BrowserRouter>
      <RouterDom />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
