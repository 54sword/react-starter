
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '../src/store'

import Router from '../src/router'

const store = configureStore(window.__initState__)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'))
