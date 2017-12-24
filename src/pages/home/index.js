import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { update } from '../../actions/account'
import { getAccessToken } from '../../reducers/account'

// 纯组件
export class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    // console.log(this);
  }

  render() {

    const { accessToken } = this.props.accessToken

    return(<div>
      <div>
        <div>当前注册用户：{accessToken}</div>
        <div>帖子总数：</div>
        <div>评论总数：</div>
        <div>恢复总数：</div>
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

Home = connect(mapStateToProps,mapDispatchToProps)(Home)

export default Home
