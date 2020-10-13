import React from 'react'

import Shell from '@/components/shell'
import Meta from '@/components/meta'

const NotFound = () => {
  return (
    <>
      <Meta title='404,无法找到该页面' />
      404,无法找到该页面
    </>
  )
}

NotFound.loadDataOnServer = async ({ store, match, res, req, user }) => {
  return { code: 404 }
}

export default Shell(NotFound)
