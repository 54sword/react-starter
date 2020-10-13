import React from 'react'
import PropTypes from 'prop-types'
import MetaTags, { ReactTitle } from 'react-meta-tags'

import { name } from 'Config'

export default function Meta({ title, children }) {
  let _title = ''

  _title += title || name
  if (title) _title += ` - ${name}`

  return (
    <>
      <ReactTitle title={_title} />
      {children ? <MetaTags>{children}</MetaTags> : null}
    </>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}
