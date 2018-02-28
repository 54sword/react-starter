import React from 'react'
import { Route, Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { update } from '../../actions/account'


import Shell from '../shell'


// 纯组件
export class Topics extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(<div>
      <div>
        <h2>Topics</h2>
      </div>
    </div>)
  }

}

export default Shell(Topics)
