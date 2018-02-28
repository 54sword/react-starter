import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { update } from '../../actions/account'
import { getAccessToken } from '../../reducers/account'

import { withRouter } from 'react-router-dom'

import Shell from '../shell'

// 纯组件
export class Home extends React.Component {

  // 服务端渲染
  static loadData({ store, match, userinfo }) {
    const { id } = match.params
    return new Promise(async function (resolve, reject) {
      resolve({ code:200 });
    })
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {

    const { accessToken } = this.props.accessToken

    return(<div>
      <div>
        <div>首页</div>
      </div>
    </div>)
  }

}

Home.propTypes = {
  accessToken: PropTypes.object.isRequired,
}

const mapStateToProps = (state, props) => {
  return {
    accessToken: getAccessToken(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

Home = withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))

export default Shell(Home)
