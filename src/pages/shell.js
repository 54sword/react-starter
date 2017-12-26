import React from 'react'
import { Route, Link } from 'react-router-dom'

// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { update } from '../../actions/account'

import parseUrl from '../common/parse-url'

const Shell = (Component) => {

  class Shell extends React.Component {

    constructor(props) {
      super(props)
    }

    // 组件加载完成
    componentWillMount() {
      const { search } = this.props.location
      this.props.location.params = search ? parseUrl(search) : null
      console.log('进入组件')
    }

    // 组件加载完成
    componentDidMount() {
      console.log('组件加载完成');
    }

    // 更新组件
    componentDidUpdate() {
      console.log('组件加载更新了');
    }

    // 组件被卸载
    componentWillUnmount() {
      console.log('组件加载被卸载');
    }

    render() {

      // console.log(this);

      return (<div>
        <Component {...this.props} />
      </div>)
    }

  }

  // Shell.defaultProps = {
  //   component: _component
  // }

  Shell.contextTypes = {
    // router: PropTypes.object.isRequired
  }

  Shell.propTypes = {
  }

  const mapStateToProps = (state) => {
    return {
      // goBack: getGoBack(state),
      // me: getProfile(state)
    }
  }

  const mapDispatchToProps = (dispatch, props) => {
    return {
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Shell)
}


export default Shell
