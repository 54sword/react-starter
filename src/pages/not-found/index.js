import React from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CSSModules from 'react-css-modules'
import styles from './style.scss'

// 纯组件
export class NotFound extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(<div>
      打不开页面
    </div>)
  }

}

NotFound = CSSModules(NotFound, styles)

NotFound.propTypes = {
}

const mapStateToProps = (state, props) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

NotFound = connect(mapStateToProps,mapDispatchToProps)(NotFound)

export default NotFound
