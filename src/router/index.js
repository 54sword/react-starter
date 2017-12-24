import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'

import routes from './list'

let Router = () => (
  <div>

    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.head}
      />
    ))}

    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ))}

  </div>
)

export default Router
