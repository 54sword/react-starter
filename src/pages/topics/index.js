import React from 'react'
import { Route, Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { update } from '../../actions/account'

import Promise from 'promise'


import Shell from '../shell'


// 纯组件
export class Topics extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    // this.props.update('qqq')
    // console.log(this);
  }

  render() {
    return(<div>

      <div>
        <h2>Topics</h2>
      </div>
    </div>)
  }

}

// Topics = CSSModules(Topics, styles)
//
// Topics.propTypes = {
//   update: PropTypes.func.isRequired
// }
//
// const mapStateToProps = (state, props) => {
//   return {
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     update: bindActionCreators(update, dispatch)
//   }
// }
//
// Topics = connect(mapStateToProps,mapDispatchToProps)(Topics)


export default Shell(Topics)
