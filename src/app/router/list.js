import React from 'react'
import loadable from '@loadable/component'

import Head from '@/components/head'
import Footer from '@/components/footer'
import Loading from '@/components/ui/loading'

const exact = true
const base = { exact, head: Head, footer: Footer }

export default [
  {
    path: '/',
    ...base,
    body: loadable(() => import('@/pages/home'), {
      fallback: <Loading />
    }),
    enter: 'everybody'
  },

  {
    path: '/posts/:id',
    ...base,
    body: loadable(() => import('@/pages/posts-detail'), {
      fallback: <Loading />
    }),
    enter: 'everybody'
  },

  {
    path: '/topics',
    ...base,
    body: loadable(() => import('@/pages/topics'), {
      fallback: <Loading />
    }),
    enter: 'member'
  },

  {
    path: '/sign-in',
    ...base,
    body: loadable(() => import('@/pages/sign-in'), {
      fallback: <Loading />
    }),
    enter: 'everybody'
  },

  {
    path: '**',
    head: Head,
    footer: Footer,
    body: loadable(() => import('@/pages/not-found'), {
      fallback: <Loading />
    }),
    enter: 'everybody'
  }
]
