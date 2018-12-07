import React, { Component } from 'react'

import './style.scss'
export default class LoadingMore extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text = '正在加载中...' } = this.props
    return (
      <div>
        <span styleName="loading" />
        {text}
      </div>
    )
  }
}
