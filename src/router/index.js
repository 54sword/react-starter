import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import Promise from 'promise'

import '../pages/global.scss'

// pages
import Home from '../pages/home'
import Posts from '../pages/posts'
import PostsDetail from '../pages/posts-detail'
import Topics from '../pages/topics'
import SignIn from '../pages/sign-in'
import NotFound from '../pages/not-found'

// components
import Head from '../components/head'

// actions
import { update } from '../actions/account'

// 登录验证
function requireAuth(Layout, props) {

  // console.log(props);

  if (true) { // 未登录
    return <Redirect to="/sign-in" />;
  } else {
    return <Layout {...props} />
  }
}

const routeArr = [
  {
    path: '/',
    exact: true,
    component: Home,
    head: Head,
    loadData: ({ store, match }) => {
      console.log('首页');

      return new Promise(function (resolve, reject) {
        // setTimeout(function () {
          store.dispatch(update('777'))
          resolve({ resr: '123' });
        // }, 3000);
      })

    }
  },
  {
    path: '/posts',
    exact: true,
    component: Posts,
    head: Head,
    loadData: () => {
      console.log('帖子');
    }
  },

  {
    path: '/posts/:id',
    exact: true,
    component: PostsDetail,
    head: Head,
    loadData: () => {
      console.log('帖子详情');
    }
  },

  {
    path: '/topics',
    exact: true,
    component: props => requireAuth(Topics, props),
    head: Head,
    loadData: () => {
      console.log('话题');
    }
  },

  {
    path: '/sign-in',
    exact: true,
    component: SignIn,
    head: Head,
    loadData: () => {
      console.log('登陆');
    }
  },

  {
    path: '**',
    component: NotFound,
    head: Head,
    loadData: () => {
      console.log('页面不存在');
    }
  }
]


let router = () => (
  <div>

    <Switch>
      {routeArr.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.head}
          />
      ))}
    </Switch>

    <Switch>
      {routeArr.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
          />
      ))}
    </Switch>

  </div>
)

export const RouteArr = routeArr
export const Router = router
