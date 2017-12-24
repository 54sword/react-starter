import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect } from 'react-router-dom'
import Promise from 'promise'

// pages
import Home from '../pages/home'
import Posts from '../pages/posts'
import Topics from '../pages/topics'
import NotFound from '../pages/not-found'

// components
import Head from '../components/head'

// actions
import { update } from '../actions/account'

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
    component: Posts,
    head: Head,
    loadData: () => {
      console.log('帖子');
    }
  },
  {
    path: '/topics',
    component: Topics,
    head: Head,
    loadData: () => {
      console.log('话题');
    }
  },
  {
    // path: '/topics',
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
