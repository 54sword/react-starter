import React, { Fragment } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import list from './list'

/**
 * 创建路由
 * @param  {Object} userinfo 用户信息，以此判断用户是否是登录状态，并控制页面访问权限
 * @return {[type]}
 */
export default ({ user = {}, enterEvent = () => {} }) => {
  // 进入路由的权限控制
  const enter = (role, Layout, props, route) => {
    enterEvent()

    switch (role) {
      // 任何人
      case 'everybody':
        return <Layout {...props} />
      // 游客
      case 'tourists':
        if (user.id) {
          return <Redirect to='/' />
        } else {
          return <Layout {...props} />
        }
      // 注册用户
      case 'member':
        if (!user.id) {
          return <Redirect to='/sign-in' />
        } else {
          return <Layout {...props} />
        }
    }
  }

  const dom = () => (
    <Fragment>
      <Switch>
        {list.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.head} />
        ))}
      </Switch>
      <Switch>
        {list.map((route, index) => {
          if (!route.body) return
          return <Route key={index} path={route.path} exact={route.exact} render={props => enter(route.enter, route.body, props, route)} />
        })}
      </Switch>
      <Switch>
        {list.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} component={route.footer} />
        ))}
      </Switch>
    </Fragment>
  )

  return {
    dom,
    list
  }
}
