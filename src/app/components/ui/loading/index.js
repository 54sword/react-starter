import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Loading = ({ text = '正在加载中...' }) => {
  return (
    <div>
      <span styleName='loading' />
      {text}
    </div>
  )
}

Loading.propTypes = {
  text: PropTypes.string
}

export default Loading
