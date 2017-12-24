
import Home from '../pages/home'
import Posts from '../pages/posts'
import Topics from '../pages/topics'

import Head from '../components/head'

import { update } from '../actions/account'

import Promise from 'promise'

const routes = [
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
]

export default routes
